// Object.preventExtensions
const produto = Object.preventExtensions({ // nao deixa add attr
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca'; // nao deixa add attr
delete produto.tag;
console.log(produto);

// Object.seal 
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze = selado + valores constantes


// resumo: 
// preventExtensions -> proibe criar novas chaves
// seal -> proibe criar e deletar
// freeze -> proibe criar, deletar e alterar o valor das chaves