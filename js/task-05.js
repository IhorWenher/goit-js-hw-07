const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const outputValue = output.textContent;

const onInputChange = (event) => {
    input.value === ""
    ? output.textContent = outputValue
    : output.textContent = event.currentTarget.value;
   
}

input.addEventListener('input', onInputChange);
