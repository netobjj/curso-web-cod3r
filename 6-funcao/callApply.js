function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "notebook dell",
    preco: 3949.90,
    des: 0.15,
    getPreco
}

global.preco = 1000
global.desc = 0.1

console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 3500, desc: 0.2 }

console.log(getPreco.call(carro, 0.5, "$"));
console.log(getPreco.apply(global, [0.5, '$$#']));

// resume: the context of the call and apply set the object This that the function will get.