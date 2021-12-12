1 Object

//1)Creating Object through literal
var obj = {};
//2)Creating with Object.create
var obj = Object.create(null);
//3)Creating using new keyword
function Person() {}
var obj = new Person();


2 Class

function Person() {
  //Properties
  this.name = "Ben";
  this.age = "18";
  //functions
  this.sayHi = function() {
    return this.name + " Says Hi";
  };
}
//Creating person instance
var p = new Person();
alert(p.sayHi());

3 Constructor

function Person(name, age) {
  //Assigning values through constructor
  this.name = name;
  this.age = age;
  //functions
  this.sayHi = function() {
    return this.name + " Says Hi";
  };
}
//Creating person instance
var p = new Person("Ben", 18);
alert(p.sayHi());
//Creating Second person instance
var p = new Person("Mel", 21);
alert(p.sayHi());

4 Inheritance

function Student() {}
//1)Prototype based Inhertance
Student.prototype = new Person();
//2)Inhertance throught Object.create
Student.prototype = Object.create(Person);
var stobj = new Student();
alert(stobj.sayHi());


5 Encapsulation

function Person() {
  //this is private variable
  var dob = "17/06/2002";
  //public properties and functions
  return {
    age: "18",
    name: "Ben",
    getDob: function() {
      return dob;
    }
  };
}
var pobj = new Person();
//this will get undefined
//because it is private to Person
console.log(pobj.dob);
//Will get dob value we using public
//funtion to get private data
console.log(pobj.getDob());

6 Polymorphism

function Person() {
  this.sayHI = function() {};
}
//This will create Student Class
function Student() {}
Student.prototype = new Person();
Student.prototype.sayHI = function(l) {
  return "Hi! I am a Student";
};
//This will create Teacher Object
function Teacher() {}
Teacher.prototype = new Person();
Teacher.prototype.sayHI = function() {
  return "Hi! I am a Teacher";
};
var sObj = new Student();
//This will check if the student
//object is instance of Person or not
//if not it won't execute our alert code.
if (sObj instanceof Person) {
  alert("Hurry! JavaScript supports OOps");
}
