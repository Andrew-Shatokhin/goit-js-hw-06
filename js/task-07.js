const sliderEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

sliderEl.addEventListener("input", textSizeValue);
function textSizeValue(event) {
  textEl.style.fontSize = `${event.target.value}px`;
}
