"use strict";
class Cidade {
    //no modificador readonly, não é possível utilizar o método set
    //é possível apenas utilizar o método construtor
    constructor(nome) {
        this.nome = nome;
    }
}
class Pessoa extends Cidade {
    constructor(nome, cidade) {
        super(cidade);
        this.nome = nome;
    }
}
class Animal extends Pessoa {
    constructor(nome, dono, cidade) {
        //utilizar o método super para passar os parâmetros das classes superiores
        super(dono, cidade);
        this.nome = nome;
    }
}
var natal = new Cidade("Natal");
var joao = new Pessoa("João", natal);
var toto = new Animal("Totó", joao, natal);
console.log(toto);
//alert('app rodando no console, objetos Cidade, Pessoa e Animal')
