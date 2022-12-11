let span = document.querySelector("#value");
let counterValue = parseInt(document.querySelector("#value").textContent);
console.log(typeof counterValue);

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const decrement = () => {
  counterValue -= 1;
  span.innerHTML = `<span id="value">${counterValue}</span>`;
};

const increment = () => {
  counterValue += 1;
  span.innerHTML = `<span id="value">${counterValue}</span>`;
};

buttonDecrement.addEventListener("click", decrement);

buttonIncrement.addEventListener("click", increment);
