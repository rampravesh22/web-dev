const addBtn = document.querySelector(".add-btn");
const input = document.querySelector("input");
const listUl = document.querySelector(".list-ul");
addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const list = document.createElement("li");
	list.classList.add("list");
	const editBtn = document.createElement("button");
	const deleteBtn = document.createElement("button");
	editBtn.textContent = "Edit";
	deleteBtn.textContent = "Delete";
	editBtn.classList.add("edit-btn");
	deleteBtn.classList.add("delete-btn");
	const listSpan = document.createElement("span");

	listSpan.append(input.value);
	list.append(listSpan, editBtn, deleteBtn);

	list.append = input.value;
	listUl.append(list);
	input.value = "";
});
// MONGODB_URL = "mongodb+srv://sandeepkg8756:S1a2n3d4@cluster0.vphkibd.mongodb.net/"
// PORT = 5000
// SECRETE_KEY = 56ujyfhgfgasfea43fdfdgfdbxsacxbvjdrtzscv
