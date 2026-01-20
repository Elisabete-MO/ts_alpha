export class Cliente {
  private readonly nome: string;
  private saldo: number;

  constructor(nome: string, saldoInicial: number) {
    this.nome = nome;
    this.saldo = saldoInicial;
  }

  // ÚNICA forma de visualizar nome e saldo
  public obterDados(): { nome: string; saldo: number } {
    return {
      nome: this.nome,
      saldo: this.saldo,
    };
  }

  public exibirInformacoes(): void {
    const dados = this.obterDados();

    console.log(
      `Dados do cliente e conta: Nome: ${dados.nome} Saldo: ${dados.saldo} \n`
    );
  }

  public depositar(valor: number): void {
    if (this.ehValorValido(valor)) {
      this.saldo += valor;
      console.log(`Depósito de R$ ${valor} realizado.`);
    } else {
      console.log("Valor de depósito inválido.");
    }
  }

  public sacar(valor: number): void {
    if (this.podeSacar(valor)) {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor} realizado.`);
    } else {
      console.log("Saque não permitido: saldo insuficiente ou valor inválido.");
    }
  }

  // OPERAÇÃO INTERNA (privada) — o cliente NÃO tem acesso a ela
  private podeSacar(valor: number): boolean {
    return this.ehValorValido(valor) && this.saldo >= valor;
  }

  // validação reaproveitada dentro da classe
  private ehValorValido(valor: number): boolean {
    return typeof valor === "number" && valor > 0;
  }
}
