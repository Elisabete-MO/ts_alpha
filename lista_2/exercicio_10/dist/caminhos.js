import { vehicle } from "./Calculadora.js";
export const caminhos = [
    {
        tipo: vehicle.ONIBUS,
        distancia: 120,
        precoPorKm: 0.5,
    },
    {
        tipo: vehicle.AVIAO,
        distancia: 800,
        precoBase: 200,
        precoPorKmExtra: 0.3,
    },
    {
        tipo: vehicle.ONIBUS,
        distancia: 60,
        precoPorKm: 0.6,
    },
    {
        tipo: vehicle.AVIAO,
        distancia: 400,
        precoBase: 150,
        precoPorKmExtra: 0.25,
    },
];
