"use strict";
function adicionarValor(a, b) {
    if (b <= 0) {
        throw new Error("Somente valores positivos devem ser adicionados ao valor inicial");
    }
    else {
        console.log(a + b);
    }
}
try {
    adicionarValor(300, 40);
}
catch (e) {
    console.log(e);
}
