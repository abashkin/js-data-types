//How new object can be created

//By using {}
var myObj = {
    myProperty: 'something'
};
console.log(myObj.myProperty); // 'something'

//By calliing create method
var createdObject = Object.create();


//By using function constructor
function Person(name) {
    this.name = name;
}

var newPerson = new Person('Indiana Johnes');
console.log(newPerson.name); // 'Indiana Johnes'