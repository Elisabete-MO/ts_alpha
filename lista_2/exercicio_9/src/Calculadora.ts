export enum vehicle {
  ONIBUS = "Ônibus",
  AVIAO = "Avião",
}

export interface CaminhoViaOnibus {
  tipo: vehicle.ONIBUS;
  distancia: number;
  precoPorKm: number;
}

export interface CaminhoViaAviao {
  tipo: vehicle.AVIAO;
  distancia: number;
  precoBase: number;
  precoPorKmExtra: number;
}

export type Caminho = CaminhoViaOnibus | CaminhoViaAviao;

abstract class Calculadora {
  abstract calcularPreco(caminhos: Caminho[]): number;
}

export class CalculadoraViagem extends Calculadora {
  calcularPreco(caminhos: Caminho[]): number {
    return caminhos.reduce((total, caminho) => {
      if (caminho.tipo === vehicle.ONIBUS) {
        return total + caminho.distancia * caminho.precoPorKm;
      }

      return (
        total +
        caminho.precoBase +
        caminho.distancia * caminho.precoPorKmExtra
      );
    }, 0);
  }
}
