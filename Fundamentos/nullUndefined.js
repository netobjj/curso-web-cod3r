// Não inicializada
let valor;
console.log(valor);

// Não aponta pra um local de memória
valor = null;
console.log(valor);

// Se quiser zerar uma variável, use null e não undefined
// Mas cuidado com operações que as variáveis são null, VAI DAR ERRO
// console.log(valor.toString());