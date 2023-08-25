const display = document.querySelector("#display");
let buttons = Array.from(document.querySelectorAll(".button"))

buttons.map(button => {
    button.addEventListener("click", function (e) {
        // console.log(e.target.innerText);
        display.innerHTML
        switch (e.target.innerText) {
            case 'C':
                display.innerText = "";
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case "=":
                try {
                    const ans = eval(display.innerText);
                    display.innerText = ans;
                } catch (error) {
                    display.innerText = "Error";
                }
                break;


            default:

                const y = e.target.innerText;
                // const x = display.innerText;
                // console.log(x);
                // console.log([...Array(10).keys()]);
                const s = parseInt(y);
                if (y) {
                    display.innerText += e.target.innerText;
                    return
                }
                if (display.innerText.slice(-1) == (!y)) {
                    console.log("not a number");
                }

                display.innerText = display.innerText.slice(0, -1)




                // console.log('hello');
        }
    });
})