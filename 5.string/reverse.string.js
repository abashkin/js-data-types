//How to reverse string

var myString = 'Hello';

var splitted = myString.split(); // ['H', 'e', 'l', 'l', 'o']
var splittedAndReversed = splitted.reverse(); // ['o', 'l', 'l', 'e', 'H']
var result = splittedAndReversed.join(); // olleH


//shortcut
var reversed = myString.split().reverse().join();


/*
    split: string to array
    join:  array to string
*/