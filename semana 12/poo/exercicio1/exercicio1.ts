class Cidade {
  readonly nome: string

  //no modificador readonly, não é possível utilizar o método set
  //é possível apenas utilizar o método construtor
  public constructor(nome:any) {
    this.nome = nome;
  }

}

class Pessoa extends Cidade {
  public nome: string

  public constructor(nome:any, cidade: Cidade) {
    super(cidade);
    this.nome = nome;
  }
}

class Animal extends Pessoa{
  nome: string

  public constructor(nome:string, dono: Pessoa, cidade:Cidade) {

    //utilizar o método super para passar os parâmetros das classes superiores
    super(dono, cidade)  
    this.nome = nome;
  }

}

var natal = new Cidade("Natal");
var joao = new Pessoa("João", natal);
var toto = new Animal("Totó", joao, natal);

console.log(toto)

//alert('app rodando no console, objetos Cidade, Pessoa e Animal')