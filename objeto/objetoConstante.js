const pessoa = { nome: "Maria" };
pessoa.nome = "José";

console.log(pessoa);

Object.freeze(pessoa); // congela o objeto

//pessoa =  { nome: "Teste" };
pessoa.nome = "anyone";
delete pessoa.nome;
pessoa.age = 19;

console.log(pessoa);

// Object const 
const pesrsonConstant = Object.freeze({ name: "Neto" });
console.log(pesrsonConstant);