let pass = document.querySelector("#pass");
let toggleBtn = document.querySelector("#toggle-btn");
toggleBtn.addEventListener('click', (e) => {
    if (pass.type === 'password') {
        pass.setAttribute('type', 'text');
        toggleBtn.classList.add("hide");
    } else {
        pass.setAttribute('type', 'password');
        toggleBtn.classList.remove("hide");
    }
});
let lowerCase = document.querySelector('#lower');
let upperCase = document.querySelector('#upper');
let number = document.querySelector('#number');
let special = document.querySelector('#special');
let length = document.querySelector('#length');

let inputField = document.querySelector('#pass');
inputField.addEventListener('keyup', (e) = {
    
});

function checkPassword(data) { 

 }

console.log(lowerCase);
console.log(upperCase);
console.log(number);
console.log(special);
console.log(length);