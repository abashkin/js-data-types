var array = [1, 1, 2, 3, 4, 5];

array.indexOf(1); //0
array.lastIndexOf(1) //1

array.push(10); //returns new length of array: 6

var last = array.pop(); // removes lasty element and returns it: 10

var first = array.shift(); // removes first element and returns it: 1

//now array == [1, 2, 3, 4, 5]

array.unshift(0); // inserts element to the beginning of array

//now array == [0, 1, 2, 3, 4, 5]

array.slice(0, 3); // [0, 1, 2]

//magic: get last element
var last = array.slice(-1);


var spliced = array.splice(2, 3); // starting from the index deletes  N elements and return spliced part
// spliced == [2, 3, 4]
// now array == [0, 1, 5]