"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(require("./Cliente"));
const cliente = new Cliente_1.default("John Connor", 1000);
// Ver informações (1ª vez)
console.log(cliente.verInformacoes());
// Primeiro depósito
cliente.depositar(200);
// Segundo depósito
cliente.depositar(300);
// Ver informações (2ª vez)
console.log(cliente.verInformacoes());
// Primeiro saque
cliente.sacar(150);
// Segundo saque
cliente.sacar(500);
// Ver informações finais
console.log(cliente.verInformacoes());
