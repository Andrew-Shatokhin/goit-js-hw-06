const inputEl = document.querySelector(`#name-input`);
const spanEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, onKeyPress);

function onKeyPress(evt) {
  spanEl.textContent = evt.currentTarget.value;
  if (!evt.currentTarget.value) {
    spanEl.textContent = "Anonymous";
  }
}
