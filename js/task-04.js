let counterValue = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const volumeElement = document.querySelector('#value')

const increment = () => {
    counterValue += 1;
    volumeElement.textContent = counterValue;
}

const decrement = () => {
    counterValue -= 1;
    volumeElement.textContent = counterValue;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
