// Closure: O fechamento, alfo que envolve alguma coisa

// closure é o escopo que permite a função acessar e manipular variáveis externas à função

const x = "GLobal";

function fora() {
    const x = "Local";

    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFunction = fora();

console.log(minhaFunction())