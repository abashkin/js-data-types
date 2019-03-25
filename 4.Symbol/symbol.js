//type Symbol is not 'Char'
//use Symbol for the unique identifiers

var unique = Symbol();

var anotherUnique = Symbol('descrioption');

//Important!
Symbol('hello') !== Symbol('hello'); // true