const a = document.querySelector(".main");
console.log("working...");
a.addEventListener("click", (e) => {
    const container = document.querySelector(".container")
    document.querySelector("#span2").classList.toggle('span2')
    document.querySelector("#span1").classList.toggle('span1')
    document.querySelector("#span3").classList.toggle('span3')
    container.classList.toggle("container-full")

})