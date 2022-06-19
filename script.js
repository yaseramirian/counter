const incrementBtn = document.querySelector(".plus");
const counterValue = document.querySelector(".number");
const decrementBtn = document.querySelector(".minus");
const resetBtn = document.querySelector(".reset");

let count = 0;

function increment() {
  count++;
  counterValue.textContent = count;
}

incrementBtn.addEventListener("click", increment);

function decrement() {
  count--;
  counterValue.textContent = count;
}

decrementBtn.addEventListener("click", decrement);

function reset() {
  count = 0;
  counterValue.textContent = count;
}

resetBtn.addEventListener("click", reset);
