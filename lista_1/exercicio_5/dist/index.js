"use strict";
// Função para processar a lista de pedidos com um intervalo de 3 segundos entre cada
function processarPedidos(pedidos) {
    let index = 0;
    const intervalo = setInterval(() => {
        if (index >= pedidos.length) {
            clearInterval(intervalo);
            console.log("Todos os pedidos foram processados.");
            return;
        }
        const pedidoAtual = pedidos[index];
        console.log(`Pedido ${pedidoAtual.id} - Status: ${pedidoAtual.status}`);
        index++;
    }, 3000);
}
// Exemplo de uso
const listaPedidos = [
    { id: 1, status: "pending" },
    { id: 2, status: "confirmed" },
    { id: 3, status: "preparing" },
    { id: 4, status: "ready" },
    { id: 5, status: "delivered" }
];
// Iniciar o processamento dos pedidos
processarPedidos(listaPedidos);
