// `` → Acento grave envolve a template string

const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';

// O que está dentro do ${} ele vai tentar interpretar
const template = `
    Olá
    ${nome}!`;
console.log(concatenacao, template);

// Expressões...
console.log(`1 + 1 = ${1 + 1}`);

// Colocando função para ele interpretar
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado com o cão')}!`)