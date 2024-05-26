function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const changesColor = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');

changesColor.addEventListener('click', ()=>{
const rndColor = getRandomHexColor();
currentColor.textContent = rndColor;
body.style.backgroundColor =rndColor;

});