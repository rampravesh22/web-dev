const btn = document.querySelector("#trigger");
const modelWrapper = document.querySelector(".modal__wrapper")
btn.addEventListener('click', (e) => {
    openModal()
});

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener('click', (e) => {
    closeModal()
});

modelWrapper.addEventListener('click', (e) => {
    if (e.target !== modelWrapper) {
        return;
    }
    closeModal()
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal()
    }
})


function openModal() {
    modelWrapper.classList.add('active');

}

function closeModal() {
    modelWrapper.classList.remove('active')
}