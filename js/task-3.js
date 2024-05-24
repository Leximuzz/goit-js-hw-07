const inputElem = document.querySelector("#name-input");
inputElem.addEventListener("input", userNameInput);
const outputElem = document.getElementById("name-output");

function userNameInput() {
  const trimmedValue = inputElem.value.trim();
  outputElem.textContent = trimmedValue ? trimmedValue : "Anonymous";
}
