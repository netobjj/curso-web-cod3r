const valor = 'Global';

// a var nao procura onde ela foi executada, mas sim oonde ela foi definida

function minhaFuncao () {
    console.log(valor);
}

function exec () {
    const valor = "Local"
    minhaFuncao()
}

exec();