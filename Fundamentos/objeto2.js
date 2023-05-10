console.log(typeof Object)
console.log(typeof new Object) //Instanciou o objeto

const Cliente = function () {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

// class é uma forma diferente de construir uma função
class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())