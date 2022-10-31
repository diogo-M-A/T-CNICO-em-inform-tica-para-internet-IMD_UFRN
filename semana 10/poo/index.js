var ContaCorrente = /** @class */ (function () {
    function ContaCorrente() {
    }
    ContaCorrente.prototype.getnome = function () {
        return this.nome;
    };
    ContaCorrente.prototype.setnome = function (nome) {
        this.nome = nome;
    };
    ContaCorrente.prototype.getcpf = function () {
        return this.cpf;
    };
    ContaCorrente.prototype.setcpf = function (cpf) {
        this.cpf = cpf;
    };
    ContaCorrente.prototype.getsaldo = function () {
        return this.saldo;
    };
    ContaCorrente.prototype.setsaldo = function (saldo) {
        this.saldo = saldo;
    };
    ContaCorrente.prototype.depositar = function (deposito) {
        this.saldo = this.saldo + deposito;
    };
    ContaCorrente.prototype.sacar = function (saque) {
        this.saldo = this.saldo - saque;
    };
    ContaCorrente.prototype.mostrarInformacoes = function () {
        return ('Nome: ' + this.nome + '\nCpf: ' + this.cpf + '\nSaldo: ' + this.saldo);
    };
    return ContaCorrente;
}());
var c = new ContaCorrente();
c.nome = 'Diogo';
c.cpf = 70798069414;
c.saldo = 4500;
