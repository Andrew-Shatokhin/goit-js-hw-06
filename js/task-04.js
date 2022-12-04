let counterValue = 0;
const decr = document.querySelector("button[data-action='decrement']");
const incr = document.querySelector("button[data-action='increment']");
const currentValue = document.querySelector("#value");

const countDecrement = function () {
  counterValue -= 1;
  currentValue.textContent = counterValue;
};

const countIncrement = function () {
  counterValue += 1;
  currentValue.textContent = counterValue;
};

decr.addEventListener("click", countDecrement);
incr.addEventListener("click", countIncrement);
