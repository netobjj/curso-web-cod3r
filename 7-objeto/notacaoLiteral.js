const a = 0;
const b = 1;
const c = 2;

const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c };

console.log(obj1, obj2);

const nomeAttr = "nota";
const valorAttr = 9.8;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);

const obj4 = { [nomeAttr]: valorAttr }

const obj5 = {
    function1: function() {
        // ...
    }, 
    function2() {
        // ....
    }

}

console.log(obj5);