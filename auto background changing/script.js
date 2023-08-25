function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
var id;
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const content = document.querySelector(".content");

function start() {
    id = setInterval((e) => {
        const r = Math.floor(Math.random() * 126);
        const g = Math.floor(Math.random() * 126);
        const b = Math.floor(Math.random() * 126);
        const o = Math.random() * 1;
        const rgb = `rgb(${r},${g},${b}, ${.1})`;
        hex = rgbToHex(r,g,b)
        content.setAttribute('content-before', hex)
        container.style.backgroundColor = rgb;
        wrapper.style.backgroundColor = rgb;
    }, 1000000);
    return id;
}
id = start();

container.addEventListener("mouseleave", (e) => {
    id = start();
});
container.addEventListener("mouseover", (e) => {
    // clearInterval(id);
    content.innerText=""
    container.classList.add("color-remove")
});


