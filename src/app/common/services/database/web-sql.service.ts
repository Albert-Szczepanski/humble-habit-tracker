import { Injectable } from '@angular/core';
import {DatabaseService} from "./database.service";

@Injectable({
  providedIn: 'root'
})
export class WebSqlService extends DatabaseService{
  private db: any;

  constructor() {
    super();
    this.initDatabase();
  }

  initDatabase(): void {
    this.db = (<any>window).openDatabase('hht.db', '1.0', 'My App Database', 2 * 1024 * 1024);

    this.createTables();
  }

  createTables() {
    // Create tables
    this.db.transaction((tx: any) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS myTable (id INTEGER PRIMARY KEY, name TEXT, description TEXT)');
    });
  }

  async executeSql(sql: string, params: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx: any) => {
        tx.executeSql(sql, params,
          (tx: any, res: any) => {
            resolve(res);
          },
          (tx: any, err: any) => {
            reject(err);
          });
      });
    });
  }
}
