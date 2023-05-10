// Armazenando uma funcão em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(3, 9);

// Armazenando uma funcão arrow em uma variável
const soma = (a, b) => {    // A seta substitui o nome function e depois abre o corpo da função
    return a + b;
}
console.log(soma(9, 18));

// return implicíto
const subtracao = (a, b) => a - b;
console.log(subtracao(14, 9));
