// Função sem retorno
console.log("Função sem retorno");
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 7);
imprimirSoma(2);        // a + undefined = NaN
imprimirSoma(2, 7, 4, 8, 9);

// Função com retorno
console.log("Função com retorno");
function soma(a, b = 1) { //Por padrão b é 0 caso não seja passado outro valor pra b na chamada da função
    return a + b;
}
console.log(soma(2, 5));
console.log(soma(2));
console.log(soma());
