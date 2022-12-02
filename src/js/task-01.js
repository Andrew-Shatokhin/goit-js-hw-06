const quantityOfItems = document.querySelectorAll(".item");
console.log(`Number of categories:`, quantityOfItems.length);

quantityOfItems.forEach(function (elem) {
  console.log(`Category:`, elem.firstElementChild.textContent);
  console.log(`Elements:`, elem.lastElementChild.children.length);
});
