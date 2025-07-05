const produto = new Object
produto.nome = "Notebook";
produto['valor do produto'] = 90.90;

console.log(produto)

delete produto.nome;
delete produto['valor do produto']

console.log(produto);

const carro = {
    nome: "Doblo",
    valor: 90000,
    proprietario: {
        nome: "Neto",
        idade: 90,
        endereco:{
           logradouro: "Rua 7/09",
           numero: 992
        }
        
    },
    condutores: [{
        //...
    },],
    calcularValorDoSeguro: function() {
        //....
    }
}


carro.valor = 1000
console.log(carro)