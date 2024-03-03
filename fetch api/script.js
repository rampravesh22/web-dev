const URL = "https://jsonplaceholder.typicode.com/posts";

// GET  and post request
fetch(URL, {
	method: "POST",
	body: JSON.stringify({
		title: "foo",
		body: "bar",
		userId: 1,
	}),
	headers: {
		"Content-type": "application/json; charset=UTF-8",
	},
})
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error("Somthing went wrong");
		}
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log("catch");
		console.log(error);
	});

// GET request
// fetch(URL)
// .then(response => {
//     if (response.ok) {
//         return response.json()
//     } else {
//         throw new Error("Somthing went wrong")
//     }
// })
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.log('catch');
//     console.log(error);
// })
