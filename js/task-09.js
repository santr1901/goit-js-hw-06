function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const colorName = document.querySelector('.color')

function changeColor () {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();

}


body.addEventListener('click', changeColor);