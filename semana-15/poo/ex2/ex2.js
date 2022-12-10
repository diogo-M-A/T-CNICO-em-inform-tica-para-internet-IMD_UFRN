"use strict";
class Pet {
    constructor(nome) {
        this.nome = nome;
    }
}
class Livro {
    constructor(nome) {
        this.nome = nome;
    }
}
class Colecao {
    constructor() {
        this.lista = [];
    }
    adicionar(elemento) {
        this.lista.push(elemento);
    }
    mostrarTodos() {
        this.lista.forEach((elemento) => {
            console.log(elemento);
        });
    }
}
const meusLivrosPrediletos = new Colecao();
const animais = new Colecao();
const dom_quixote = new Livro("Dom Quixote");
const a_divina_comedia = new Livro("A Divina Comédia");
meusLivrosPrediletos.adicionar(dom_quixote);
meusLivrosPrediletos.adicionar(a_divina_comedia);
const toto = new Pet("Totó");
const fofo = new Pet("Fofo");
animais.adicionar(toto);
animais.adicionar(fofo);
meusLivrosPrediletos.mostrarTodos();
animais.mostrarTodos();
