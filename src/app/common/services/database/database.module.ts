import {NgModule} from '@angular/core';
import {SQLite} from "@awesome-cordova-plugins/sqlite/ngx";
import {SqlService} from "./sql.service";
import {WebSqlService} from "./web-sql.service";
import {DatabaseService} from "./database.service";

const PROVIDERS = [
    SQLite,
    {
      provide: DatabaseService,
      useClass: (window as any).cordova ? SqlService : WebSqlService,
    },
  ]

@NgModule({
  providers: [...PROVIDERS],
})
export class DatabaseModule {}
