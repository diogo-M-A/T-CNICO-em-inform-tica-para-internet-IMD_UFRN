class ContaCorrente {

  nome: string;
  cpf: number;
  saldo: number;

  getnome(): string {
    return this.nome;
  }

  setnome(nome: string) {
    this.nome = nome;
  }

  getcpf(): number {
    return this.cpf;
  }

  setcpf(cpf: number) {
    this.cpf = cpf;
  }

  getsaldo(): number {
    return this.saldo;
  }

  setsaldo(saldo: number) {
    this.saldo = saldo;
  }

  depositar(deposito: number){
    this.saldo = this.saldo + deposito
  }

  sacar(saque: number){
    this.saldo = this.saldo - saque
  }

  mostrarInformacoes():string{
    return('Nome: ' + this.nome + '\nCpf: ' + this.cpf + '\nSaldo: ' + this.saldo)
  }

}

let c = new ContaCorrente();

c.nome = 'Diogo'
c.cpf = 70798069414
c.saldo = 4500
