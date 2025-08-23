const pai = { nome: 'Pedro', corCabelo: "preto" }

const filha1 = Object.create(pai);
filha1.nome = 'Maria';
console.log(filha1.nome);

const filha2 = Object.create(pai, {
    nome: { value: 'Maria José', enumerable: true, writable: true }
});

console.log(filha2.nome);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log("Por herança: " + key);
} 