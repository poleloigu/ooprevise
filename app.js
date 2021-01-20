// Object Literals
const obj = {
	name: 'Jake',
	age: 25,
	nickNames: ['J', 'Jakey'],
	friendRatings: {
		John: 5,
		Amy: 10,
		Nick: 3,
	},
	greet: function () {
		console.log(
			`Hello my name is ${this.name} but my friends call me ${this.nickNames[0]}`
		);
	},
};
// obj.greet();

// Let var const or function keywords
var x = 1;
const y = 10;
let z = 5;
function sum() {}
const sumX = () => {};

const firstName = 'Mia';
const lastName = 'Hedge';
// console.log(`Her name is ${firstName} ${lastName}`);

// ES5 & ES6 Classes
function es5Class(firstName, lastName, age) {
	this.firstName = firstName || 'No name';
	this.lastName = lastName;
	this.age = age;
	this.returnFullName = function () {
		return `${this.firstName} ${this.lastName}`;
	};
}
const es5 = new es5Class('Jake', 'Here', 25);
// console.log(es5);

class es6Class {
	constructor(firstName, lastName, age) {
		this.firstName = firstName || 'No name';
		this.lastName = lastName;
		this.age = age;
		this.returnFullName = function () {
			return `${this.firstName} ${this.lastName}`;
		};
	}
}
const es6 = new es6Class('Jake', 'There', 24);
// console.log(es6);

// Constructors
/**
 * Classes are basically blueprints.
 * It is a function that creates a new object with the blueprint you have given it.
 *
 */
class constructorExample {
	constructor(name) {
		this.name = name;
		this.role = function () {
			console.log(`I am${name}`);
		};
	}
	get sum() {
		return this.name;
	}
}
const mom = new constructorExample('Martha');
const dad = new constructorExample('Jacob');
// console.log(mom.sum);
// console.log(mom);
// console.log(dad);

// Prototypes & Inheritance
class Human {
	constructor(first, last, age) {
		this.firstName = first;
		this.lastName = last;
		this.age = age;
	}
	hello() {
		console.log('Hello, I am a human.');
	}
	humanGreeting() {
		console.log('Human!!!');
	}
}
const human = new Human('Jane', 'Doe', 20);

Human.prototype.nationality = 'English';

class Adult extends Human {
	constructor(first, last, age, degree) {
		super(first, last, age);
		this.degree = degree;
	}
	hello() {
		console.log('Hello, I am an adult');
	}
	adultGreeting() {
		console.log('Adult!!!');
	}
}
const adult = new Adult('Jenny', 'De Buck', 39, 'master');

console.log(adult);
// console.log(adult.hello());
// console.log(adult.humanGreeting());
// console.log(adult.nationality);

class Male extends Adult {
	constructor(first, last, age, degree, cars) {
		super(first, last, age, degree);
		this.cars = cars;
	}
	hello() {
		console.log('Hello, I am a male');
	}
	maleGreeting() {
		console.log('Male!!!');
	}
}

const male = new Male('Mateo', 'Navarro', 50, 'bachelors', [
	'audi',
	'honda',
	'mercedes',
]);

class PersonPrototypeExample {
	constructor() {}
}
PersonPrototypeExample.prototype.name = 'Mike';
PersonPrototypeExample.prototype.age = 28;
PersonPrototypeExample.prototype.sayName = () => {
	console.log(this.name);
};

const person1 = new PersonPrototypeExample();

class PersonSharedExample {
	constructor() {}
}

PersonSharedExample.prototype.name = 'John';
PersonSharedExample.prototype.age = 26;
PersonSharedExample.prototype.friends = ['Mia', 'Vanessa'];

const person2 = new PersonSharedExample();
const person3 = new PersonSharedExample();
person2.friends.push('Kylie');

// console.log(person2.friends);
// console.log(person3.friends);

class Person {
	constructor() {
		this.name = 'Jake';
		this.age = 30;
		this.friends = ['Me', 'Him'];
	}
}

const person4 = new Person();
const person5 = new Person();

person4.friends.push('All of you');

console.log(person4.friends);
console.log(person5.friends);

// Object.create()

// Avoiding global variables
