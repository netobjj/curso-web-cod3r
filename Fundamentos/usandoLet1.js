// let → tem: Escopo global + Escopo de função + Escopo de bloco
var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero) // ele procura no escopo interno "numero", tem: use ele. Não tem: procure no escopo maior
}
console.log('dentro = ', numero)
