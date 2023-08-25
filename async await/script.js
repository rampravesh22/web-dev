// GET
// fetch(URL)
//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         } else {
//             throw new Error("Somthing went wrong")
//         }
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log('catch');
//         console.log(error);
//     })

const URL = "https://jsonplaceholder.typicode.com/posts"
async function getPost() {
    const response = await fetch(URL)
    if (!response.ok) {
        throw new Error("error aa bhai")

    }
    const data = await response.json()
    return data
}

const ans = getPost();
getPost()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("catch");
        console.log(error);
    })