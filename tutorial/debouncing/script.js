const input = document.getElementById("input");

const handleInput = (e) => {
	console.log(e.target.value);
};

const debounce = (func, delay) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func(...args);
		}, delay);
	};
};

const decoratedInput = debounce(handleInput, 2000);
input.addEventListener("input", decoratedInput);
