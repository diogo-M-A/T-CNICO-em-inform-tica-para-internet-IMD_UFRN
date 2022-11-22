import { Personagem } from "./personagem";

export class Arqueiro extends Personagem{
    public atacar(){
        console.log('Recebi 20 de dano')
    }
    public atacarPersonagem(fulano: Personagem){
        console.log(fulano.atacar())
    }
}