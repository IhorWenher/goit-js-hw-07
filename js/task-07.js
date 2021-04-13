const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeText = () => {
    text.style.fontSize = `${input.value}px`
}

input.addEventListener('input', changeText);