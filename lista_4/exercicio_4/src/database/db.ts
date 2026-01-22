import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db: Database<sqlite3.Database, sqlite3.Statement>;

export async function initDB(): Promise<Database> {
  if (!db) {
    db = await open({
      filename: "./database.sqlite",
      driver: sqlite3.Database,
    });

    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      )
    `);
  }

  return db;
}

export function getDB(): Database {
  if (!db) {
    throw new Error("Banco de dados não inicializado");
  }
  return db;
}
