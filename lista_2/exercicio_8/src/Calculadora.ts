export abstract class Calculadora {
  public somar(a: number, b: number): number {
    return a + b;
  }

  public subtrair(a: number, b: number): number {
    return a - b;
  }

  public multiplicar(a: number, b: number): number {
    return a * b;
  }

  public dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  }
}

