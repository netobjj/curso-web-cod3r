function getInteiroAleatorioEntre(max, min) {
    const valor = Math.random() * (max - min);
    return Math.floor(valor)
}

let opcao = -1

while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 15);
    console.log(`Opção escolhida foi ${opcao}`)
}

