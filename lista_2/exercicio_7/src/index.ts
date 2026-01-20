import { Cliente } from "./Cliente.js";

const cliente = new Cliente("John Connor", 1000);

console.log(" ========================== ");
// Ver informações (1ª vez)
cliente.exibirInformacoes();

// Primeiro depósito
cliente.depositar(200);
// Segundo depósito
cliente.depositar(300);

// Ver informações (2ª vez)
cliente.exibirInformacoes();

// Primeiro saque
cliente.sacar(150);
// Segundo saque
cliente.sacar(500);

// Ver informações finais
cliente.exibirInformacoes();
