export class Cliente {
    nome;
    saldo;
    constructor(nome, saldoInicial) {
        this.nome = nome;
        this.saldo = saldoInicial;
    }
    // ÚNICA forma de visualizar nome e saldo
    obterDados() {
        return {
            nome: this.nome,
            saldo: this.saldo,
        };
    }
    exibirInformacoes() {
        const dados = this.obterDados();
        console.log(`Dados do cliente e conta: Nome: ${dados.nome} Saldo: ${dados.saldo} \n`);
    }
    depositar(valor) {
        if (this.ehValorValido(valor)) {
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado.`);
        }
        else {
            console.log("Valor de depósito inválido.");
        }
    }
    sacar(valor) {
        if (this.podeSacar(valor)) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado.`);
        }
        else {
            console.log("Saque não permitido: saldo insuficiente ou valor inválido.");
        }
    }
    // OPERAÇÃO INTERNA (privada) — o cliente NÃO tem acesso a ela
    podeSacar(valor) {
        return this.ehValorValido(valor) && this.saldo >= valor;
    }
    // validação reaproveitada dentro da classe
    ehValorValido(valor) {
        return typeof valor === "number" && valor > 0;
    }
}
