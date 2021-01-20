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
console.log(`Her name is ${firstName} ${lastName}`);

// ES5 & ES6 Classes

// Constructors

// Prototypes & Inheritance

// Object.create()

// Avoiding global variables
