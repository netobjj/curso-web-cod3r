const produto = new Object
produto.nome = "Notebook";
produto['valor do produto'] = 90.90;

console.log(produto)

delete produto.nome;
delete produto['valor do produto']

console.log(produto);

