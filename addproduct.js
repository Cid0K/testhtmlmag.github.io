// addproduct.js

// products уже загружен через <script src="products.js"></script> в HTML

function getPrice(productId) {
  const product = products.find(p => p.id === parseInt(productId, 10)); //находим товар по id
  if (!product) {
      console.error(`Товар с id ${productId} не найден.`);
      return 0;
  }

const city = localStorage.getItem('selectedCity') || 'arkhangelsk'; //Получаем город из localStorage или ставим город по умолчанию

 if (product.prices && product.prices[city]) {
    return product.prices[city];
  } else {
    console.error(`Цена для города ${city} для товара ${productId} не найдена.`);
    return 0;
 }
}
// Функция для обновления количества товаров и цены (пример)
function updateCount(productId, decrement = false) {
const quantityElement = document.querySelector(`.quantity[data-quantity-id="${productId}"]`);
if (!quantityElement) return;

const priceElement = document.querySelector(`.price[data-price-id="${productId}"]`);
if (!priceElement) return;


let currentQuantity = parseInt(quantityElement.textContent, 10);

if (decrement) {
  if (currentQuantity > 0) {
    currentQuantity--;
  } else {
      return; //не даем сделать отрицательное значение
  }
} else {
  currentQuantity++;
}
quantityElement.textContent = currentQuantity;
 priceElement.textContent = `${getPrice(productId) * currentQuantity}р.`;// обновляем цену

}

function createProductItem(productId) {
  const product = products.find(p => p.id === parseInt(productId, 10)); //находим товар по id
   if (!product) {
     console.error(`Товар с id ${productId} не найден.`);
     return null; //или можно выкинуть ошибку
   }

const item = document.createElement('div');
item.classList.add('item');
item.dataset.itemId = productId;

const img = document.createElement('img');
img.src = product.imageUrl;
img.alt = '';
img.classList.add('img');
item.appendChild(img);

const itemName = document.createElement('h3');
itemName.classList.add('item-name');
itemName.textContent = product.name;

const price = document.createElement('span');
price.classList.add('price');
price.textContent = ` ${getPrice(productId)}р.`; // Добавлен пробел
price.dataset.priceId = productId;
  
itemName.appendChild(document.createTextNode(' ')); // Добавляем пробел с помощью текстовой ноды
itemName.appendChild(price);
item.appendChild(itemName);

const btn = document.createElement('button');
btn.classList.add('btn');
btn.textContent = 'Купить';
btn.dataset.btnId = productId;
btn.addEventListener('click', () => {
  updateCount(productId);
});
item.appendChild(btn);

const decrementBtn = document.createElement('button');
decrementBtn.classList.add('btn-decrement');
decrementBtn.textContent = '-';
decrementBtn.dataset.decrementId = productId;
decrementBtn.addEventListener('click', () => {
  updateCount(productId, true);
});
item.appendChild(decrementBtn);

const quantity = document.createElement('span');
quantity.classList.add('quantity');
quantity.textContent = '0';
quantity.dataset.quantityId = productId;
item.appendChild(quantity);

return item;
}


function addProducts() {
const container = document.getElementById('inner-container');
  if (!products || !Array.isArray(products)) {
      console.error("Products не определен или не является массивом.");
      return;
  }

products.forEach(product => {
  const itemElement = createProductItem(product.id);
    if(itemElement) {
       container.appendChild(itemElement);
    }
});
}

addProducts();
