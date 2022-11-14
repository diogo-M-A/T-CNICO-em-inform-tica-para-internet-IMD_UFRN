class Computador{
  processador: string
  memoria: number

  constructor(p:string, m:number){
    this.processador = p
    this.memoria = m
  }
}

class Laptop extends Computador{
  bateria_watts: number

  constructor(w:number = 0, p:string, m:number){
    super(p, m)
    this.bateria_watts = w
  }
}

class Desktop extends Computador{
  cabinete:string

  constructor(c: string = '', p:string, m:number){
    super(p, m)
    this.cabinete = c
  }
}

alert('aplicação rodando no console')

console.log('objeto Computador: (processador e memória), objeto Laptop (computador + bateria em watts), objeto Desktop(computador + cabinete)')