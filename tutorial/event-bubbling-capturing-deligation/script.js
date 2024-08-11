// const outerMost = document.querySelector("#outerMost");
// const grandParent = document.querySelector("#grandparent");
// const parent = document.querySelector("#parent");
// const childDiv = document.querySelector("#childDiv");
// const childBtn = document.querySelector("#childBtn");

// outerMost.addEventListener(
// 	"click",
// 	() => {
// 		console.log("outerMost");
// 	},
// 	true
// );
// grandParent.addEventListener(
// 	"click",
// 	() => {
// 		console.log("grandParent");
// 	},
// 	false
// );
// parent.addEventListener(
// 	"click",
// 	() => {
// 		console.log("parent");
// 	},
// 	false
// );
// childDiv.addEventListener(
// 	"click",
// 	() => {
// 		console.log("childDiv");
// 	},
// 	true
// );
// childBtn.addEventListener(
// 	"click",
// 	() => {
// 		console.log("childBtn");
// 	},
// 	false
// );

// event deligation
const itemList = document.querySelector("#list");
itemList.addEventListener("click", (e) => {
	if ((e.target.tagName = "li")) {
		console.log(e.target.innerText);
	}
});
