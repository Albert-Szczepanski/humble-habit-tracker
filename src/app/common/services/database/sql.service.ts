import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from "@awesome-cordova-plugins/sqlite/ngx";
import {Platform} from "@ionic/angular";
import {DatabaseInterface} from "./database.interface";

@Injectable({
  providedIn: 'root'
})
export class SqlService implements DatabaseInterface{
  private db: SQLiteObject | undefined;
  constructor(
    private platform: Platform,
    private sql: SQLite) {
    this.platform.ready().then(() => {
      this.initDatabase();
    });
  }

  private initDatabase(): void {
    this.sql.create({
      name: 'hht.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.db = db;
        this.createTables();
      })
      .catch(e => console.log(e));
  }

  private createTables(): void {
    if (!this.db)
      return;
    this.db.executeSql('CREATE TABLE IF NOT EXISTS myTable (id INTEGER PRIMARY KEY, name TEXT, description TEXT)', [])
      .then(() => console.log('Table created'))
      .catch(e => console.log(e));
  }
}

