function Carro(velocidadeMax = 200, delta = 5) {
    // Private
    let velocidadeAtual = 0;
    this.ligado = false;

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMax;
        }
    }

    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }

    this.ligar = function () {
        this.ligado = this.ligado == false ? true : this.ligado
    }
}


function teste() {
    let carro = new Carro(180, 10);
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()

    console.log(carro.getVelocidadeAtual())

}

teste()
