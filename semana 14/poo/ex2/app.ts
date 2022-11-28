function adicionarValor(a: number, b: number) {
    if (b <= 0 ){
        throw new Error("Somente valores positivos devem ser adicionados ao valor inicial");
    } else{
        console.log(a + b);
    }
}

try{
    adicionarValor(300, 40);
} catch(e){
    console.log(e);
}