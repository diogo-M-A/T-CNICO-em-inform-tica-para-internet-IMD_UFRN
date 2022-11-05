class MesaDeJantar{
    material: string
    lugares: any
    preco: any
    
    constructor(material:string, lugares?:number, preco?:number){
        this.material = material
        this.lugares = lugares
        this.preco = preco

        if(this.lugares != undefined){
            this.lugares = lugares
        }else{
            this.lugares = 4
        }
    }

    detalhar(){
        console.log(`A mesa feita de ${this.material} possui ${this.lugares} e custa ${this.preco}R$`)
    }
}

var m1 = new MesaDeJantar('ferro', 8, 100)
var m2 = new MesaDeJantar('madeira', 6 )
var m3 = new MesaDeJantar('vidro')

console.log(m1.detalhar())
console.log(m2.detalhar())
console.log(m3.detalhar())

alert('código rodando no console: objetos m1, m2 e m3')