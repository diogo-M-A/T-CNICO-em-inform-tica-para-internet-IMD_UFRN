import { Personagem } from "./personagem";

export class Guerreiro extends Personagem{
    public atacar() {
        console.log('recebi 10 de dano')
    }

    public atacarPersonagem(fulano: Personagem){
        console.log(fulano.atacar())
    }
}