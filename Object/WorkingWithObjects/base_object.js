var obj = {
    a: '1',
    b: '2',
}

obj.a; // '1'

obj['b'] // 2

obj.c = '3';

console.log(obj.d); // undefined

console.log(Object.keys(obj)); // [a, b, c]

obj.hasOwnProperty('a'); //true
obj.hasOwnProperty('f'); //false


//you can add new methods to the already created object
obj.doSomething(); //TypeError. doSomething is not a fucntion

obj.prototype.doSomething = function() {console.log('Hello');}

obj.doSomething(); // Hello



// Be careful, you can change object methods with your own
Array.prototype.sort = function() {console.log('Sort')};

[3, 2, 1].sort(); // 'Sort'

//Solution
var yourCustomFunction = function() {};
Object.prototype.method = Object.prototype.method || yourCustomFunction;