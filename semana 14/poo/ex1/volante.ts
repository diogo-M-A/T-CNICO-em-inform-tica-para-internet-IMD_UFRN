import { controlavel } from "./controlavel";

export class Volante implements controlavel{
    mover():void{
        console.log("volante girando")
    }
}