// hoisting = içamento (JOGAR PRA CIMA)
// var tem hoisting
console.log("a = " + a)
var a = 2
console.log("a = " + a)


//Isso acima é o mesmo que abaixo ↓
var a
console.log("a = " + a)
a = 2
console.log("a = " + a)
