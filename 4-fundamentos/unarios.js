let num1 = 1
let num2 = 2

num1++
--num1 //é mais apressado (É feito primeiro)

console.log(++num1 === num2++)  // O incremento só é feito depois da comparação
console.log(num1, num2)


// DEIXE O SEU CÓDIGO O MAIS SIMPLES POSSÍVEL
// NÃO DEIXE SEU CÓDIGO COMPLEXO