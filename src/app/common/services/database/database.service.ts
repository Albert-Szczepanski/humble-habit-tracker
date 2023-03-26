export abstract class DatabaseService {
  abstract initDatabase(): void;
  abstract createTables(): void;
  abstract executeSql(sql: string, params: any[]): Promise<any>;
}
