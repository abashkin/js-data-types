// number
var number1 = 42;
var number2 = Number('42');
var number3 = +'42';
var number4 = Number.parseInt('42');


// infinity
var positiveInf = 1/0;
var negativeInf = 1/-0;


//NaN = not a number
var notAnumber = Number('Lalala');
Number.isNaN(42);    // false
Number.isNaN('nan'); // true


// NaN is not equal to anything other
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true