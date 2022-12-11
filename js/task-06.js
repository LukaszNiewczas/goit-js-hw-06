let inputFrom = document.getElementById("validation-input");
let attributeValue = inputFrom.getAttribute("data-length");

let validInput = () => {
  inputFrom.classList.add("valid");
  inputFrom.classList.remove("invalid");
};

let invalidInput = () => {
  inputFrom.classList.add("invalid");
  inputFrom.classList.remove("valid");
};

inputFrom.addEventListener("blur", () => {
  if (attributeValue == inputFrom.value.length) {
    validInput();
  } else {
    invalidInput();
  }
});
