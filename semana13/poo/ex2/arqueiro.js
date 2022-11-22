"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arqueiro = void 0;
const personagem_1 = require("./personagem");
class Arqueiro extends personagem_1.Personagem {
    atacar() {
        console.log('Recebi 20 de dano');
    }
    atacarPersonagem(fulano) {
        console.log(fulano.atacar());
    }
}
exports.Arqueiro = Arqueiro;
