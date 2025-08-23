const sequencia = {
    _valor: 1, // convenção _NOME: significa que é uma varável privada.
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor)
        this._valor = valor
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 90;

console.log(sequencia.valor, sequencia.valor);