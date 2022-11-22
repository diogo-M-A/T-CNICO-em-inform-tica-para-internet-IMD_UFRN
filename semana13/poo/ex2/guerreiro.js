"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
const personagem_1 = require("./personagem");
class Guerreiro extends personagem_1.Personagem {
    atacar() {
        console.log('recebi 10 de dano');
    }
    atacarPersonagem(fulano) {
        console.log(fulano.atacar());
    }
}
exports.Guerreiro = Guerreiro;
