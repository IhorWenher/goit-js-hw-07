
const btnContainer = document.querySelector('#controls');
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-action="render"]');
const clearBtn = document.querySelector('[data-action="destroy"]');
const boxContainer = document.querySelector('#boxes');

const randomRgb = () => {
    const random = () => {
        return Math.floor(Math.random() * 256);
    }

    const r = random();
    const g = random();
    const b = random();

    return `rgb(${r}, ${g}, ${b})`; 
}

const createBoxes = () => {
    const boxes = [];

    for (let i = 0; i < input.valueAsNumber; i += 1) {
        const newDiv = document.createElement('div');
        newDiv.style.width = '30px';
        newDiv.style.height = '30px';
        newDiv.style.backgroundColor = randomRgb();
        if (i >= 1) {
            newDiv.style.width = `${30 + i * 10}px`;
            newDiv.style.height = `${30 + i * 10}px`;
        }
       boxes.push(newDiv);
    }

    return boxContainer.append(...boxes);
}

const destroyBoxes = () => {
    boxContainer.innerHTML = '';
    input.value = '';
}

createBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', destroyBoxes);
input.addEventListener('focus', destroyBoxes)
