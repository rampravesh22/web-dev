const body = document.body;
const id = setInterval(() => {
  const r = Math.floor(Math.random() * 126);
  const g = Math.floor(Math.random() * 126);
  const b = Math.floor(Math.random() * 126);
  const rgb = `rgb(${r},${g},${b})`;
  // console.log(rgb);
  body.style.background = rgb;

}, 1000);

const btn = document.querySelector("button");
btn.addEventListener('mouseover', () => {
  clearInterval(id);
  btn.textContent = body.style.background;
});