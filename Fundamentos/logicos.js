function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^trabalho2) // bitwise (xor = ou exclusivo) _ O !! transforma em booleano
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
    // No exemplo acima: Ele retorna um objeto
    // Mas esse objeto não tem chave? ES15 possibilita criar objeto somente dizendo o valor, e a chave o js mesmo cria c/ a const, EXEMPLO:
    //           { compraSorvete }   =   { comprarSorvete: "valor de comprar sorvete"  }
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, false));