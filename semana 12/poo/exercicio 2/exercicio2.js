"use strict";
class Computador {
    constructor(p, m) {
        this.processador = p;
        this.memoria = m;
    }
}
class Laptop extends Computador {
    constructor(w = 0, p, m) {
        super(p, m);
        this.bateria_watts = w;
    }
}
class Desktop extends Computador {
    constructor(c = '', p, m) {
        super(p, m);
        this.cabinete = c;
    }
}
alert('aplicação rodando no console');
console.log('objeto Computador: (processador e memória), objeto Laptop (computador + bateria em watts), objeto Desktop(computador + cabinete)');
