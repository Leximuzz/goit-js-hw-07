const quanСtgr = document.querySelectorAll("ul#categories > li.item");
console.log(`Numbers of categories: ${quanСtgr.length}`);

quanСtgr.forEach((element) => {
  console.log(`Category: ${element.querySelector(`h2`).textContent}`);
  console.log(`Elements: ${element.querySelectorAll(`li`).length}`);
});
