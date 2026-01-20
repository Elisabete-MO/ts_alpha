import { CalculadoraViagem } from "./Calculadora.js";
import { caminhos } from "./caminhos.js";
const calculadora = new CalculadoraViagem();
const precoTotal = calculadora.calcularPreco(caminhos);
console.log(`Preço total da viagem: R$ ${precoTotal.toFixed(2)}`);
