const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const ingredientsList = ingredients.map(function (elem) {
  const ingredientsItems = document.createElement("li");
  ingredientsItems.textContent = elem;
  ingredientsItems.classList.add("item");
  return ingredientsItems;
});
console.log(ingredientsList);

list.append(...ingredientsList);
console.log(list);
