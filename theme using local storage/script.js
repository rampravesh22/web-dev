const themeSelector = document.querySelector("#themeSelector");

const theme = localStorage.getItem("theme");
changeTheme(theme);

function changeTheme(theme) {
	if (theme === "dark") {
		document.body.style.backgroundColor = "black";
	} else if (theme === "light") {
		document.body.style.backgroundColor = "#e5e5e5";
	} else {
		document.body.style.backgroundColor = "#fff";
	}
}
themeSelector.addEventListener("change", (e) => {
	localStorage.setItem("theme", e.target.value);
	changeTheme(e.target.value);
});

window.addEventListener("storage", (e) => {
	if (e.key === "theme") {
		changeTheme(e.newValue);
		themeSelector.value = e.newValue;
	}
});

// how to check if storage is available or not
const storageAvailable = (type) => {
	console.log("yes it is available");
	let storage;
	try {
		storage = window[type];
		let x = "__storage_test__";
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} catch (e) {
		return (
			e instanceof DOMException &&
			(e.code === 22 ||
				e.code === 1024 ||
				e.name === "QoutaEceededError" ||
				e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
			storage &&
			storage.length !== 0
		);
	}
};

if (storageAvailable("localStorage")) {
} else {
	console.log("storage is not available");
}
