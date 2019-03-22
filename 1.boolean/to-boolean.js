/*
    In JS we can convert other types to boolean
*/

var fromNumber = !42;

/*
    Bollean convert can helpfull, for example to set default values:
 */
var answer = prompt('What is the answer ?');
 // js will convers first argument(answer) to boolean and if the result is false i will use the value from the second part;
var usersAnswer = answer || 42;