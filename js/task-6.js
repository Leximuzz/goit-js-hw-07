function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = controls.querySelector("input");

const createButton = controls.querySelector("button[data-create]");

const destroyButton = controls.querySelector("button[data-destroy]");

const boxesContainer = document.getElementById("boxes");

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 amd 100.");
  }
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  const fragment = document.createDocumentFragment();
  let size = 20;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = "10px";
    fragment.appendChild(div);
    size += 10;
  }
  boxesContainer.appendChild(fragment);
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
