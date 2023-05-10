const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {         // Math.ceil >>>>>> Arredonda pra cima e "floor" >>> arredonda pra baixo
        case 10:
        case 9:
            console.log('Quadro de Honra')   // Caso 10 ou 9
            break                            // Se não colocar o break, ele executará os demais case indepentende de case 10: case 9: == true 
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}
imprimirResultado(10)
imprimirResultado(8.99)
imprimirResultado(6.99)
imprimirResultado(2.3)
imprimirResultado(69.23)
