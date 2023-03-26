export abstract class DatabaseService {
  abstract initDatabase(): void;
  abstract createTables(): void;
}
