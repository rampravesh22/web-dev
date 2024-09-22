const asyncOperation = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const success = true;
			if (success) {
				resolve("successful");
			} else {
				reject("failed");
			}
		}, 1500);
	});
};
const element = document.createElement();

const ps = asyncOperation();
ps.then((res) => {
	console.log(res);
}).catch((error) => {
	console.log(error);
});
