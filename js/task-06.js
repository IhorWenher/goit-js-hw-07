const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

const validation = () => {

    return !(dataLength === input.value.length.toString())
    ? input.classList.add('invalid')
    : input.classList.add('valid')
 
}

const removeClass = () => {
    input.classList.remove('invalid')
    input.classList.remove('valid')
}

input.addEventListener('change', validation);
input.addEventListener('focus', removeClass);