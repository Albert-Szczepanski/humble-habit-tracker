import { Injectable } from '@angular/core';
import {DatabaseInterface} from "./database.interface";

@Injectable({
  providedIn: 'root'
})
export class WebSqlService implements DatabaseInterface{
  private db: any;

  constructor() {
    this.initDatabase();
  }

  private initDatabase(): void {
    this.db = (<any>window).openDatabase('hht.db', '1.0', 'My App Database', 2 * 1024 * 1024);

    // Create tables
    this.db.transaction((tx: any) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS myTable (id INTEGER PRIMARY KEY, name TEXT, description TEXT)');
    });
  }
}
