// 1_create object and method and this keyword:

var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

userOne.login();
userOne.logout();

// 2_accessing and updating the value and store key in variable and access it :

var prop = 'name'

userOne.email = 'ryu2k18@ninjas.com';
userOne['email'] = 'ryu2k18@ninjas.com';
userOne[prop] = 'Ryuke';

console.log(userOne);


// 3_this will log all the value of object:

userOne.age = 25;
userOne.logInfo = function(){
    console.log(this.name, this.age, this.email);
};

userOne.logInfo();
userOne.login();
userOne.logout();


Class
4_create a empty class
  
class user {
  
 }

// Constructor function and new 
// 5_create a class and add method after constructor
//   -the "new" keyword
//   -create a new empty object {}
//   -sets the value of "this" to be the new empty object
//   -calls the constructor method
  
 class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

userOne.login();
userTwo.logout();

// Method Chaning
// 6_method chaning means apply method one by one and this is only possible threw return this in methods (return this) otherwise it give error:

class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

userOne.login().updateScore().updateScore().logout(); //method chaining

console.log(userOne);


// Class Inheritance
// 7_we can extend the class and give extra methods to it:

class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email
        });
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);
userTwo.deleteUser(userOne); // won't work

console.log(users);


// Constructors (under the hood)
// 8_create with function:

function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    };
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

console.log(userOne);
userTwo.login();

// Prototype __proto__
// 9_add method and inbulit function in javascript use prototype:

function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
};

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
};

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

console.log(userOne);
userTwo.login();

// Prototype Inheritance
// 10_

function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
};

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
};

function Admin(...args){
    User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];
