const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar // Nesse caso, o this aponta pra cá, e aqui não tem saudacao.
falar() // Conflito entre paradigmas: Funcional e OO

// O BIND: nele vc passa "O objeto no qual vc quer que seja resolvido o THIS"
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
