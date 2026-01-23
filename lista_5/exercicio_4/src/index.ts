import { Calculator } from "./calculator";
import "./styles.css";

const calculator = new Calculator();

const inputA = document.getElementById("valueA") as HTMLInputElement;
const inputB = document.getElementById("valueB") as HTMLInputElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

function getNumbers(): { a: number; b: number } {
  const a = Number(inputA.value);
  const b = Number(inputB.value);

  if (isNaN(a) || isNaN(b)) {
    throw new Error("Por favor, insira números válidos.");
  }

  return { a, b };
}

function showResult(message: string): void {
  resultDiv.textContent = message;
}

document.getElementById("add")?.addEventListener("click", () => {
  try {
    const { a, b } = getNumbers();
    showResult(`Resultado: ${calculator.add(a, b)}`);
  } catch (error) {
    showResult((error as Error).message);
  }
});

document.getElementById("subtract")?.addEventListener("click", () => {
  try {
    const { a, b } = getNumbers();
    showResult(`Resultado: ${calculator.subtract(a, b)}`);
  } catch (error) {
    showResult((error as Error).message);
  }
});

document.getElementById("multiply")?.addEventListener("click", () => {
  try {
    const { a, b } = getNumbers();
    showResult(`Resultado: ${calculator.multiply(a, b)}`);
  } catch (error) {
    showResult((error as Error).message);
  }
});

document.getElementById("divide")?.addEventListener("click", () => {
  try {
    const { a, b } = getNumbers();
    showResult(`Resultado: ${calculator.divide(a, b)}`);
  } catch (error) {
    showResult((error as Error).message);
  }
});
