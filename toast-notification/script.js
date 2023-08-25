const btn = document.querySelector("button");
const successToast = document.querySelector(".success-toast");
btn.addEventListener("click", () => {
	successToast.style.display = "block";
});

const toast = document.querySelector(".toast");
setTimeout(() => {
	successToast.style.display = "none";
}, 4000);
