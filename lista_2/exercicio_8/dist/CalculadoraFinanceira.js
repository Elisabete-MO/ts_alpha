import { Calculadora } from "./Calculadora.js";
export class CalculadoraFinanceira extends Calculadora {
    jurosSimples(capital, taxa, tempo) {
        if (capital < 0 || taxa < 0 || tempo < 0) {
            throw new Error("Valores não podem ser negativos.");
        }
        return capital + (capital * taxa * tempo);
    }
    jurosCompostos(capital, taxa, tempo) {
        if (capital < 0 || taxa < 0 || tempo < 0) {
            throw new Error("Valores não podem ser negativos.");
        }
        return capital * Math.pow(1 + taxa, tempo);
    }
}
