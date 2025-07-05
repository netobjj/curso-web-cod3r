// Using literal notation
const obj1 = {}
console.log(obj1);

// Instanciando em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object // or new Object()
console.log(obj2);

// Build Functions
function Produto(nome, preco, desconto) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco - (preco * desconto);
    }
}


const p1 = new Produto("Notebook Dell G15", 7999, 0.1);
const p2 = new Produto("Acer Nitro", 3500, 0.05);

console.log(p1.getPrecoComDesconto());
console.log(p2.getPrecoComDesconto());

// Função Factory
function criarPessoa(nome, dataNasc, cpf, escolaridade, rendimentos) {
    return {
        nome, 
        dataNasc,
        cpf, 
        escolaridade,
        calcularImposto( ) {
            return (rendimentos * 0.12)
        }
    }
}


// Object create 
const filha = Object.create(null);
filha.nome = "Maria";

console.log(filha)

const fromJSON = JSON.parse(' {"info": "esse é um teste "}');
console.log(fromJSON.info)