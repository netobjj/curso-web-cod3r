const person = {
    name: "neto",
    age: 19, 
    weight: 88.9
}

console.log(Object.keys(person)); // get a ARRAY of the all keys of object
console.log(Object.values(person)); // get a ARRAY of the all values of object
console.log(Object.entries(person)); // get a ARRAY of the all keys and values of object: [ [ key, value ], [ key, value] 

Object.defineProperty(person, 'dateOfBirthday', { 
    enumerable: false, // permite ver a chave enumerada
    writable: false,
    value: "01/01/2025"
});


person.dateOfBirthday = "09/09/2009";

console.log(person);
console.log(Object.keys(person));


// Object.assign (ECMAScript 2015): É tipo uma concatenação
const dest = { a: 2 };
const o1 = { b: 0 };
const o2 = { c: 7 };
const obj = { a: 5 };

Object.assign(dest, o1, o2, obj);
console.log(dest);