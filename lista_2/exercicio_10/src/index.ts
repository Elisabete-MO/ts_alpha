import { DBConnection } from "./DBConnection.js";

const db1 = DBConnection.getInstance("db://rex:123@host:333/mydb");
const db2 = DBConnection.getInstance("db://rex:123@host:333/mydb");
const db3 = DBConnection.getInstance("db://rex:123@host:333/mydb");

console.log("-----------------------");

console.log("const db1 = DBConnection.getInstance(\"db://rex:123@host:333/mydb\")\;");
console.log("const db2 = DBConnection.getInstance(\"db://rex:123@host:333/mydb\")\;");
console.log("const db3 = DBConnection .getInstance(\"db://rex:123@host:333/mydb\")\;");
console.log("-----------------------");

console.log("As instâncias são iguais? (db1 === db2)", db1 === db2); // true
console.log("As instâncias são iguais? (db1 === db3)", db1 === db3); // true
