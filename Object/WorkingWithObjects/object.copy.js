var first = {
    hello: 'World'
};

var second = Object.assign({}, first); //returns new object with the copy of first

//Problem: 
var obj1 = {
    a: {
        b: 10
    },
    c: 20
};

var obj2 = Object.assign({}, obj1);

obj2.c = 50;
obj1.c === obj2.c // false

obj2.a = { b: 1000 };
obj1.a.b === 1000 //true: nested object are still referencing to the same object

//Deep clone object:
var myObj = {
    hello: {
        value: 'World'
    }
};

var deepClone = JSON.parse(JSON.stringify(myObj));