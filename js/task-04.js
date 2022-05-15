
const minusBtn = document.querySelector('#counter button[data-action = "decrement"]');

const plusBtn = document.querySelector('#counter button[data-action = "increment"]');

let counterValue = 0;

const minusFunction  =() => {
    counterValue -=1;
    document.querySelector('#value').textContent = counterValue;
}

const plusFunction = () => {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
}

minusBtn.addEventListener('click', minusFunction);
plusBtn.addEventListener('click', plusFunction);
