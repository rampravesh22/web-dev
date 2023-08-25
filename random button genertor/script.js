const btn = Array.from(document.querySelectorAll('.btn'));
btn.forEach((button) => {
    button.addEventListener('mouseover', e => {
        console.log(typeof this)
        console.log(e.target.id);
    })
}, );
const r = Math.floor(Math.random() * 126);
const g = Math.floor(Math.random() * 126);
const b = Math.floor(Math.random() * 126);
const rgb = `rgb(${r},${g},${b})`;
const container = document.querySelector(".container")

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


// const ans = myInput.addEventListener('click',)



const name = 10;
for (i = 0; i < 12; i++) {
    const button = document.createElement("button");
    const child = document.createElement("div")
    const color = document.createElement("span")
    child.setAttribute('class', 'child')
    color.setAttribute('class', 'color-span')
    button.textContent = `button`
    button.classList.add('btn-style');
    const r = Math.floor(Math.random() * 126);
    const g = Math.floor(Math.random() * 126);
    const b = Math.floor(Math.random() * 126);
    const a = Math.random();
    if (a > 0 && a < 0.5) {
        button.style.color = "black"
    }
    const rgb = `rgb(${r},${g},${b},${a})`;
    button.style.backgroundColor = rgb
    button.setAttribute('id', 'btn')
    // button.setAttribute('id', 'house')
    const hex = rgbToHex(r, g, b)
    color.append(hex)
    child.append(button)
    child.append(color)
    container.append(child)

    button.addEventListener('click', (e) => {
        const x = e.target;
        const span = x.nextElementSibling;
        navigator.clipboard.writeText(span.textContent);
        span.classList.add('add')
        // e.target.innerText = "Copied"
        span.innerText = "Coppied"
    });

    button.addEventListener('mouseleave', (e) => {
        const span = e.target.nextElementSibling;
        span.innerText = hex;
    })
}
