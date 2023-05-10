// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar function
function fun1() { }

// Armazena em função
const fun2 = function() { } 

// Em array
const array = [function (a, b) {    return a + b }, fun1, fun2]

console.log(array[0](2, 3));

// Em objeto
const obj = { } 
obj.falar = function() {  return 'Opa!' }
console.log(obj.falar())

// Passar funcao como parametro
function run(fun) {
    fun()
}

run(function() {    console.log("Executando...")    })

// Uma função pode retornar/conter outra função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(1, 2)(6)