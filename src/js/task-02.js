const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');



ingredients.forEach((ingredient)=>{
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  ingredientsList.append(listItem);
});



// for(let item of ingredients) {
//   const listItem = document.createElement('li');
//   listItem.textContent = item;
//   listItem.classList.add('item');
//   ingredientsList.append(listItem);
// }







