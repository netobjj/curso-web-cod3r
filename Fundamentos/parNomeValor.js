// par nome/valor
const saudacao = 'Opa' //contexto lexico 1

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua neto da Silva',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)