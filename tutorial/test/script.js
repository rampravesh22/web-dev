const person = {
	name: "ram",
	age: 24,
	rollNumber: 345,
};

Object.seal(person);
person.greet = "clear data";
Object.freeze(person);
person.age = 34;
console.log(person);
