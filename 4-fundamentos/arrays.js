const valores = [2, 5, 8, 96];
console.log(valores[6]);

valores[4] = 10;
console.log(valores);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

//Pop → remove o último elemento do array
valores.pop();
console.log(valores);

delete valores[7];
console.log(valores);

console.log(typeof valores);


