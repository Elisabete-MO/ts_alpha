// Definição do tipo StatusPedido com os possíveis status de um pedido
type StatusPedido =
  | "pending"
  | "confirmed"
  | "preparing"
  | "ready"
  | "delivered";

// Definição do tipo Pedido
type Pedido = {
  id: number;
  status: StatusPedido;
};

// Função para processar a lista de pedidos com um intervalo de 3 segundos entre cada
function processarPedidos(pedidos: Pedido[]): void {
  let index = 0;

  const intervalo = setInterval(() => {
    if (index >= pedidos.length) {
      clearInterval(intervalo);
      console.log("Todos os pedidos foram processados.");
      return;
    }

    const pedidoAtual = pedidos[index];

    console.log(
      `Pedido ${pedidoAtual.id} - Status: ${pedidoAtual.status}`
    );

    index++;
  }, 3000);
}

// Exemplo de uso
const listaPedidos: Pedido[] = [
  { id: 1, status: "pending" },
  { id: 2, status: "confirmed" },
  { id: 3, status: "preparing" },
  { id: 4, status: "ready" },
  { id: 5, status: "delivered" }
];

// Iniciar o processamento dos pedidos
processarPedidos(listaPedidos);