const childs = document.querySelectorAll(".child");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
let selected;
childs.forEach((child) => {
	child.addEventListener("dragstart", (e) => {
		selected = e.target;
		console.log(selected);

		right.addEventListener("dragover", (e) => {
			e.preventDefault();
		});
		right.addEventListener("drop", (e) => {
			right.appendChild(selected);
			selected = null;
		});

		left.addEventListener("dragover", (e) => {
			e.preventDefault();
		});
		left.addEventListener("drop", (e) => {
			left.appendChild(selected);
			selected = null;
		});
	});
});
