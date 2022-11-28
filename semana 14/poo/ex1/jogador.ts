import { controlavel } from "./controlavel";

export class Jogador implements controlavel{
    mover():void{
        console.log( "Jogador se movendo")
    }
}
