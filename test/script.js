function outer(a) {
	const name = "ram";  
	function inner(b) {
		console.log(a + b);
		console.log(name);
	}
	return inner;
}

const inner = outer(34);
console.log(inner);
inner(5);
