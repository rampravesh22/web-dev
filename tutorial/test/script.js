const btn = document.getElementById("btn");
const h2 = document.querySelector("h2");

btn.addEventListener("click", () => {
	h2.classList.toggle("text-red-500");
});
