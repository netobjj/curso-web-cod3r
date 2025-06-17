function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1,
    }
}

console.log(criarProduto("Notebook", 2200.90))
console.log(criarProduto("Iphone 12", 4200.90))
console.log(criarProduto("tv", 1200.90))