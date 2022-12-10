const liItems = document.querySelectorAll("ul#categories li.item");

console.log(`Number of categories: ${liItems.length}`);

const h2s = Array.from(liItems).map((item) => item.querySelector("h2"));

h2s.forEach((h2) => {
  const listItemNumber = h2.parentElement.querySelectorAll("li").length;
  console.log(`Category: ${h2.textContent}\nElements: ${listItemNumber}`);
});
