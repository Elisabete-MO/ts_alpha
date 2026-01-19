// Definição do tipo Funcionario
type Funcionario = {
  nome: string;
  valorHora: number;
  horasTrabalhadas: number;
};

function calcularSalarioTotal(squad: Funcionario[]): number {
  return squad.reduce((total, funcionario) => {
    return total + funcionario.valorHora * funcionario.horasTrabalhadas;
  }, 0);
}

const squad: Funcionario[] = [
  { nome: "Ana", valorHora: 50, horasTrabalhadas: 160 },
  { nome: "Bruno", valorHora: 40, horasTrabalhadas: 150 },
  { nome: "Carla", valorHora: 60, horasTrabalhadas: 140 }
];

const salarioTotal = calcularSalarioTotal(squad);
console.log("Entrada:");
squad.forEach(f =>
  console.log(`nome: ${f.nome}, valorHora: ${f.valorHora}, horasTrabalhadas: ${f.horasTrabalhadas}`)
);
console.log("\nSalário total do squad:", salarioTotal);
