var array = [0, 1, 2, 3, 4, 5];

//next two approaches to iterate over aray are the same

for (var index = 0; index < array.length; index++) {
    console.log(array[index]);    
}

array.forEach(
    function(item) {
        console.log(item)
    }
);

//Array to string: 
array.join('::'); //"0::1::2::3::4::5"

//sort array:
var arr = [2, 4, 1, 0, 8, 12];

arr.sort(); // 0, 1, 12, 2, 4, 8: OOPS! Sorted by string values by default

arr.sort(function(a, b) { return a >= b ? 1: -1 }); // [0, 1, 2, 4, 8, 12]


//apply function to every arr element: 
var mapped = arr.map(function(item){return item + 1;}); // [1, 2, 3, 5, 9, 13]
//map returns new array!

var filtered = arr.filter(function(item){return item > 5;}); // [8, 12]
//filter returns new array

var reduced = arr.reduce(function(prev, curr) {return prev + curr;}, 0); // returns sum of all elements: 27
//reduce returns 1 value from array



//check if one of elements satisfies condition: 
arr.some(function(item){return item === 5;}) //false
arr.some(function(item){return item > 10;}) //true

//check if every element satisfies condition
arr.every(function(item){return item >= 0;}) //true
arr.every(function(item){return typeof item === 'string';}) //false


