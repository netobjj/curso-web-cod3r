let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// ! (Exclamação) → Negação
console.log(!true);
isAtivo = 1; // Os Inteiros são true, só o Zero é false
console.log(!isAtivo);
console.log(!!isAtivo);

console.log('Os verdadeiros...');
console.log(!!3);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = 0)); //Pega o valor da variável "NESSE caso 0" e retorna o booleano dele.

console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = 0));

// Retorna o primeiro true
console.log('Pra finalizar...');
console.log(('' || null || 0 || 'Neto'));
console.log(!!('' || null || 0 || 'Neto'));

const nome = '';
console.log(nome || "Desconhecido");