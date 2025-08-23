const ferrari = {
    modelo: "F40",
    velMax: 345
};

const volvo = {
    modelo: "XC60",
    velMax: 296
};

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);

console.log(volvo.__proto__);
console.log(volvo.__proto__ === Object.prototype); // Isso não acontece se você estiver criando com Função construtora

//  Object é uma função e toda função tem o seu prototype
function meuObjeto() {}
console.log(typeof meuObjeto, typeof Object)
