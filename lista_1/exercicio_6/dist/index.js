"use strict";
// Enumeração das ações possíveis
var Action;
(function (Action) {
    Action["Attack"] = "Attack";
    Action["Defend"] = "Defend";
    Action["UseItem"] = "UseItem";
    Action["Escape"] = "Escape";
})(Action || (Action = {}));
// Função para executar uma ação com base no personagem e na ação fornecidos
function executarAcao(personagem, acao) {
    const [classe, equipamento, vida] = personagem;
    switch (acao) {
        case Action.Attack:
            console.log(`${classe} com ${equipamento} está atacando enquanto tem ${vida} de vida.`);
            break;
        case Action.Defend:
            console.log(`${classe} com ${equipamento} está se defendendo com ${vida} de vida restante.`);
            break;
        case Action.UseItem:
            console.log(`${classe} com ${equipamento} está usando um item (vida atual: ${vida}).`);
            break;
        case Action.Escape:
            console.log(`${classe} com ${equipamento} está tentando fugir com ${vida} de vida.`);
            break;
        default:
            console.log("Ação desconhecida.");
    }
}
// Exemplo de uso
const heroi = ["Archer", "Bow", 120];
executarAcao(heroi, Action.Attack);
executarAcao(heroi, Action.Defend);
executarAcao(heroi, Action.UseItem);
executarAcao(heroi, Action.Escape);
