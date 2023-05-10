function Obj (nome) {
    this.nome = nome.toUpperCase() //this → significa que fica visível pra fora (não somente no escopo da função)
    this.exec = function () {
        console.log('Exec....')
    }
}

const Obj2 = new Obj('Cadeira')
const Obj3 = new Obj('Madeira')

console.log(Obj2.nome)
console.log(Obj3.nome)

Obj3.exec();