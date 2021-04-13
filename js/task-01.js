const categoriesById = document.querySelector('#categories');
const categoriesList = categoriesById.querySelectorAll('.item');

const numberOfcategories = categoriesList.length;
console.log(`В списке ${numberOfcategories} категории.`);

categoriesList.forEach(element => {
    const categoryName = element.querySelector('h2').textContent;
    const numberOfelements = element.querySelector('ul').children.length;
    
    console.log(`
     Категория: ${categoryName}
     Количество элементов: ${numberOfelements}
    `);
})
