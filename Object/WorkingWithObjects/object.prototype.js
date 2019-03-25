// Each time you create new object it defines it`s 
// proto property equals to base Object
var obj = {};


/* 
Example of properties and methods that are provided by base Object 

    obj.toString();
    obj.hasOwnProperty();
    obj.keys;
    etc ...
*/

// How to create an object without proto: Set preototype to NULL
var objWithEmptyProty = Object.create(null);

objWithEmptyProty.toString(); //TypeError: a.toString is not a function
objWithEmptyProty.keys; // undefined

