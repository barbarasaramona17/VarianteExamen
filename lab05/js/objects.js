//var person = new Object();
//var person = Object.create(Object());
var person = {};
person.name = "Gigescu";
person.surname = "Popel";
person['address'] = "Some Street";

person.dynamicGetter = function(propertyName){
    console.log(this[propertyName] || `${propertyName} does not exist!` )
}

person.dynamicGetter('name');

var student = Object.create(person);
student.group = 1073;
student.add = function(){
    console.log('New function');
}
student.dynamicGetter('group');

var stud = Object.create(student);
stud.something = function(){
    console.log('Do something');
}
console.log(stud);

