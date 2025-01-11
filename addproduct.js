// products.js (предположим, что он уже существует)
// ...

function createProductItem(productId) {
  const product = products[productId];
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
    item.appendChild(itemName);

  const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = `${getPrice(productId)}р.`; // Используем функцию для получения цены
    price.dataset.priceId = productId;
    itemName.appendChild(price);

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
   for(const productId in products) {
        const itemElement = createProductItem(productId);
        container.appendChild(itemElement);
    }
}

addProducts();
