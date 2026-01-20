export class DBConnection {
    static instance; // Instância única
    connString;
    constructor(connString) {
        this.connString = connString;
        console.log(`Connected to db: ${this.connString}`);
    }
    // Método estático para criar ou retornar a instância existente
    static getInstance(connString) {
        if (!DBConnection.instance) {
            DBConnection.instance = new DBConnection(connString);
        }
        return DBConnection.instance;
    }
}
