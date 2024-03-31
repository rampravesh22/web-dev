const input = prompt("Enter your name");
if (input.length > 0) {
	const container = document.createElement("div");
	container.append(input);
	container.classList.add("container");
	document.body.append(container);
}
