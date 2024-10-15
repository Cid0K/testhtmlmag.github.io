// products.js (предположим, что он уже существует)
// ...

function createProductItem(product, index) {
 const item = document.createElement('div');
 item.classList.add('item');
 item.dataset.itemId = product.id;

 const img = document.createElement('img');
 img.src = product.imageUrl;
 img.alt = '';
 img.classList.add('img');
 item.appendChild(img);

 const itemName = document.createElement('h3');
 itemName.classList.add('item-name');
 itemName.textContent = product.name;
 item.appendChild(itemName);

 const price = document.createElement('span');
 price.classList.add('price');
 price.textContent = `${product.price}р.`; // Исправленное создание текста
 price.id = `price${product.id}`; // Добавляем id элементу price
 itemName.appendChild(price);

 const btn = document.createElement('button');
 btn.classList.add('btn');
 btn.textContent = 'Купить';
 btn.id = `btn${product.id}`; // Добавляем id элементу btn
 btn.addEventListener('click', () => {
  updateCount(product.id);
 });
 item.appendChild(btn);

 const decrementBtn = document.createElement('button');
 decrementBtn.classList.add('btn-decrement');
 decrementBtn.textContent = '-';
 decrementBtn.id = `decrement${product.id}`; // Добавляем id элементу decrementBtn
 decrementBtn.addEventListener('click', () => {
  updateCount(product.id, true);
 });
 item.appendChild(decrementBtn);

 const quantity = document.createElement('span');
 quantity.classList.add('quantity');
 quantity.textContent = '0';
 quantity.style.display = 'none';
 quantity.id = `quantity${product.id}`; // Исправленный id
 item.appendChild(quantity);

 return item;
}


function addProducts() {
  const container = document.getElementById('inner-container'); 
  products.forEach((product, index) => {
    const itemElement = createProductItem(product, index);
    container.appendChild(itemElement);
  });
}

addProducts();

