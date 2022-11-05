class Estudante{
    readonly id: number
    public nome: string
    private creditos: number

    constructor(id:number, nome:string, creditos:number){
        this.id = id
        this.nome = nome

        if(creditos <= 0){
            this.creditos = 1
        }else{
            this.creditos = creditos
        }
    }

    detalhar(){
        console.log(`aluno: ${this.nome}\n
        id: ${this.id}\n
        créditos: ${this.creditos}`)
    }
}

var e1 = new Estudante(4828, 'diogo', 8777)
var e2 = new Estudante(4348, 'araujuo', 1919)

console.log(e1.detalhar)
console.log(e2.detalhar)

alert('Código rodando no console. objetos e1 e e2')