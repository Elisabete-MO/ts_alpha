import { Calculadora } from "./Calculadora.js";

export class CalculadoraFinanceira extends Calculadora {
  public jurosSimples(
    capital: number,
    taxa: number,
    tempo: number
  ): number {
    if (capital < 0 || taxa < 0 || tempo < 0) {
      throw new Error("Valores não podem ser negativos.");
    }

    return capital + (capital * taxa * tempo);
  }

  public jurosCompostos(
    capital: number,
    taxa: number,
    tempo: number
  ): number {
    if (capital < 0 || taxa < 0 || tempo < 0) {
      throw new Error("Valores não podem ser negativos.");
    }

    return capital * Math.pow(1 + taxa, tempo);
  }
}
