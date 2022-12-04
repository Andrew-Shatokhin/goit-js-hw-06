function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", changeBgColor);

function changeBgColor() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanEl.textContent = `${getRandomHexColor()}`;
}
