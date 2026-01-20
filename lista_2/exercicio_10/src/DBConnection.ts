export class DBConnection {
  private static instance: DBConnection; // Instância única
  private connString: string;

  private constructor(connString: string) {
    this.connString = connString;
    console.log(`Connected to db: ${this.connString}`);
  }

  // Método estático para criar ou retornar a instância existente
  public static getInstance(connString: string): DBConnection {
    if (!DBConnection.instance) {
      DBConnection.instance = new DBConnection(connString);
    }
    return DBConnection.instance;
  }
}
