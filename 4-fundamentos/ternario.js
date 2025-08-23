// É equivalente ao SE(xxx=yyy; 'Aprovado'; 'Reprovado') >>>>>  nota >= 60; "Aprovado" ; "Reprovado"

const resultado = nota => nota >= 90 ? 'Aprovado' : 'Reprovado'
console.log(resultado(91))

let a = 2
let b = '2'

console.log(a == b)