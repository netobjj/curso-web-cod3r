function Pessoa(nome, sobrenome, idade) {
    this.idade = idade;
    this.nome = nome;
    this.fullName = nome + " " + sobrenome;

    this.setIdade = (idade) => {
        this.idade = idade;
    }

    this.getIdade = () => {
        return this.idade;
    }

    this.toString = () => {
        return console.log(`{ fullName: ${this.fullName}, idade: ${this.idade} }`);
    }
}

const p1 = new Pessoa("Neto", "Silva", 21)

p1.toString()