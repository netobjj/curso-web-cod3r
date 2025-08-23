// novo recurso ES2015

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua neto da Silva',
        numero: 123
    }
}

const { nome, idade } = cliente
console.log(nome, idade)

const { nome: n, idade: i } = cliente //cria 2 variáveis: A 1ª "n" com o atributo nome de cliente e a 2ª "i" com idade de cliente
console.log(n, i)

const { endereco: { logradouro, numero } } = cliente
console.log(logradouro, numero)

