const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const parentUl = document.querySelector('#ingredients');
const ingredientsWithLi = [];

for (let i = 0; i < ingredients.length; i += 1) {
  
    const ingredient = document.createElement('li');
    ingredient.append(ingredients[i]);
    ingredientsWithLi.push(ingredient);
}

parentUl.append(...ingredientsWithLi);
