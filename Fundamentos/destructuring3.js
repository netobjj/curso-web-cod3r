function rand ({ min = 0, max = 1000}) { //extrai min e max de objeto (por padrão: min = 0 e max = 1000)
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 50, min: 2}))
const obj = { min: 99, max: 400}
console.log(rand(obj))