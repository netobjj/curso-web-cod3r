// Factory: Fabrica - Sempre retorna um novo objeto

function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    }
}

console.log(criarPessoa("Maria", "Jose"));