// var → tem: Escopo global + Escopo de função (*não tem Escopo de bloco)
// Variável dentro de uma função = visível apenas dentro da função
// Variável declarada fora da função = visível globalmente

{
    {
        {
            {
                var sera = "Será???";
            }
        }
    }
}

console.log(sera);

function teste() {
    var local = 123
}

teste()
//console.log(teste())