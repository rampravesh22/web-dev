// function printFullName(firstName, lastName) {
// 	function printName() {
// 		console.log(firstName, lastName);
// 	}
// 	return printName;
// }

// const ans = printFullName("John", "Doe");
// ans();

// example 3
// const count = 0;
// const update = 0;
// let loggedIn = true;
// let create = false;

// const multiplication = (a, b) => {
// 	let product = a * b;
// 	return product;
// };

// function addition(a, b) {
// 	const sum = a + b;
// 	return sum;
// }

// console.log(fullName);
// console.log(age);
// var fullName = "john doe";
// var age = 24;

// console.log(fullName);
// console.log(age);

// example 4
// console.log(this);
// console.log("window");
// console.log(myFunction);
// myFunction();
// console.log(fullName);

// function myFunction() {
// 	console.log("this is my function");
// }

// var firstName = "jon";
// var lastName = "doe";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// function applyFunction(a, b, c) {
// 	console.log(this);
// 	console.log(a, b, c);
// }

// const data = ["jon", "doe"];

// applyFunction.apply(data, [1, 2, 3]);
// console.log(applyFunction);

// const person = {
// 	name: "john",
// 	greet: function (test = "Hi") {
// 		console.log(`${test} ${this.name}`);
// 	},
// };

// // console.log(person.greet("Hi"));
// const greet = person.greet.bind(person);
// greet();

const btn = document.querySelector(".btn");
const person1 = {
	name: "John",
	handleClick: function (...test) {
		localStorage.setItem(Math.random(), "rhoit");
		console.log("Data " + this.name, test.toString());
	},
};

const person2 = {
	name: "bob",
};

btn.addEventListener("click", () => {
	person1.handleClick.apply(person2, ["hello", "new"]);
});
