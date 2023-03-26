import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from "@awesome-cordova-plugins/sqlite/ngx";
import {Platform} from "@ionic/angular";
import {DatabaseService} from "./database.service";

@Injectable({
  providedIn: 'root'
})
export class SqlService extends DatabaseService{
  private db: SQLiteObject | undefined;
  constructor(
    private platform: Platform,
    private sql: SQLite) {
    super();
    this.platform.ready().then(() => {
      this.initDatabase();
    });
  }

  async initDatabase(): Promise<void> {
    await this.sql.create({
      name: 'hht.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.db = db;
        this.createTables();
      })
      .catch(e => console.log(e));
  }

  createTables(): void {
    if (!this.db)
      return;
    this.db.executeSql('CREATE TABLE IF NOT EXISTS myTable (id INTEGER PRIMARY KEY, name TEXT, description TEXT)', [])
      .then(() => console.log('Table created'))
      .catch(e => console.log(e));
  }

  async executeSql(sql: string, params: any[]): Promise<any> {
    if (!this.db)
      return;
    return await this.db.executeSql(sql, params);
  }
}

