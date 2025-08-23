const prod1 = {};
prod1.nome = 'Celular Moto G';
prod1.preco = 4199.90;
prod1['Desconto Legal'] = 0.40      //evitar atributos com espaço
console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    desconto: {clienteFidelidade: 0.40, clienteNaoFidelidade: 0.25}
};
console.log(prod2)


// Atribuição por Referência
// O objeto é atribuído por referência. Exemplo: ↓
const a = {name: "Neto"};
const b = a;
b.name = "Opa";

console.log(b.name);

// b e a estão apontando para o mesmo local (objeto)


                   dadosCompilados.push([alunos.person_id[rowAlfa], alunos.nome[rowAlfa], alunos.email[rowAlfa], telefones, alunos.produto_titulo[rowAlfa], alunos.produto_id[rowAlfa], alunos.inicio_matricula[rowAlfa].toString().split('T')[0], alunos.expiracao_matricula[rowAlfa], url_set, planilhaDeResultado.getName(), nomeAlunoDiario, "Precision: " + (pontuacao / tamanhoAlfa) + "%", dados_aba[row_aba][parseInt(colunasDO.split(";")[0] - 1)], dados_aba[row_aba][parseInt(colunasDO.split(";")[1] - 1)], abas[index_aba].getName()]);