"use strict";
function calcularSalarioTotal(squad) {
    return squad.reduce((total, funcionario) => {
        return total + funcionario.valorHora * funcionario.horasTrabalhadas;
    }, 0);
}
const squad = [
    { nome: "Ana", valorHora: 50, horasTrabalhadas: 160 },
    { nome: "Bruno", valorHora: 40, horasTrabalhadas: 150 },
    { nome: "Carla", valorHora: 60, horasTrabalhadas: 140 }
];
const salarioTotal = calcularSalarioTotal(squad);
console.log("Entrada:");
squad.forEach(f => console.log(`nome: ${f.nome}, valorHora: ${f.valorHora}, horasTrabalhadas: ${f.horasTrabalhadas}`));
console.log("\nSalário total do squad:", salarioTotal);
