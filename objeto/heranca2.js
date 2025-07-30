// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = "0"; // prototype pai, não é recomendado modificá-lo

const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return console.log(`${this.velAtual} km/h de ${this.velMax} km/h`); // Super referencia o protótipo acima, this refencia o protótipo atual
    }
}


const ferrari = {
    modelo: "F90",
    velMax: 390, //shadowing velMax, sombreamento em cima de velMax do carro
}

const volvo = {
    modelo: "XC60",
    status() {
        return console.log(`${super.modelo}: ${super.status()}`);
    }
}

Object.setPrototypeOf(ferrari, carro); // Ferrari é uma herança de carro
Object.setPrototypeOf(volvo, carro); // Volvo é uma herança de carro

console.log(ferrari);
console.log(volvo); 

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300)
console.log(ferrari.status());