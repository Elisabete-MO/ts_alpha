export var vehicle;
(function (vehicle) {
    vehicle["ONIBUS"] = "\u00D4nibus";
    vehicle["AVIAO"] = "Avi\u00E3o";
})(vehicle || (vehicle = {}));
class Calculadora {
}
export class CalculadoraViagem extends Calculadora {
    calcularPreco(caminhos) {
        return caminhos.reduce((total, caminho) => {
            if (caminho.tipo === vehicle.ONIBUS) {
                return total + caminho.distancia * caminho.precoPorKm;
            }
            return (total +
                caminho.precoBase +
                caminho.distancia * caminho.precoPorKmExtra);
        }, 0);
    }
}
