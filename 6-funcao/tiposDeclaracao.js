console.log(sum(2, 4));
// O compilador do JS grava todos as funções e depois executa todos os códigos
// então quando ele executa o código acima ele já tinha lido a function sum antes

console.log(sumVar(2, 4)); 

// function declaration
function sum (a, b) {
    return a + b;
}

// function expression
const sumVar = function () {
    return a + b;
}