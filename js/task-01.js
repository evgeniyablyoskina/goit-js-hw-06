const categories = document.querySelectorAll(".item");

console.log("Number of categories: ", categories.length);

categories.forEach(function printCategoryElements(item) {
  const itemTitle = item.querySelector("h2");
  console.log("Category: ", itemTitle.innerText);
  const itemList = item.querySelectorAll("li");
  console.log("Elements: ", itemList.length);
});
