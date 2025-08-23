console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() { // voc~e pode criar funcoes para Array, String, Object pois eles são typeof = fucntion, logo têm o prototype
    return this[0];
}

const arr = [11, 3, 4];

console.log(arr.first());

console.log([1, 2, 3, 4, 5].first());
console.log(['a', 'b', 'c'].first());

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse());