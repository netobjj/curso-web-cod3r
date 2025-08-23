let notas = [6.5, 5, 5.7, 9.5];

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Neto',
    idade: 20,
    sexo: 'Masc',
    gostoso: true
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${ pessoa[atributo]}`)
}