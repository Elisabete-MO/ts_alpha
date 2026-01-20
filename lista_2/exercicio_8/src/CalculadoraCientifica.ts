import { Calculadora } from "./Calculadora.js";

export class CalculadoraCientifica extends Calculadora {
  public potencia(base: number, expoente: number): number {
    return Math.pow(base, expoente);
  }

  public fatorial(n: number): number {
    if (!Number.isInteger(n) || n < 0) {
      throw new Error(
        "O fatorial só pode ser calculado para números inteiros positivos."
      );
    }

    if (n === 0 || n === 1) return 1;

    let resultado = 1;
    for (let i = n; i > 1; i--) {
      resultado *= i;
    }

    return resultado;
  }
}
