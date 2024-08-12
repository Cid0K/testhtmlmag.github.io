let productCounts = {};
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.show();

const data = {
  products: []
};

const tt = document.getElementById("data"); 

function updateData() {
  data.products = []; // Очищаем массив products перед сбором новых данных

  for (const productId in productCounts) {
    if (productCounts[productId] > 0) {
      data.products.push({
        id: productId,
        quantity: productCounts[productId]
      });
    }
  }

  // Вывод данных в текст
  tt.textContent = JSON.stringify(data, null, 2);

  if (data.products.length > 0) {
    tg.MainButton.show();
    mb.textContent ='показана'
  } else {
    tg.MainButton.hide();
    mb.textContent ='скрыта'
}
}

function updateCount(productId, decrement = false) {
  const quantityElement = document.getElementById(`quantity${productId}`);
  let count = productCounts[productId] || 0;

  if (decrement && count > 0) {
    count--;
  } else {
    count++;
  }

  productCounts[productId] = count;

  quantityElement.textContent = count;
  quantityElement.style.display = count > 0 ? 'inline' : 'none';

  const addButton = document.getElementById(`btn${productId}`);
  const decrementButton = document.getElementById(`decrement${productId}`);
  
  if (count > 0) {
    addButton.textContent = '+';
    addButton.classList.add('mini');
    decrementButton.classList.add('show');
    tt.textContent = JSON.stringify(data, null, 2);

  } else {
    addButton.textContent = 'купить';
    addButton.classList.remove('mini');
    decrementButton.classList.remove('show');
    tt.textContent =''
  }
  updateData();
}




  // Отправляем данные в Telegram
  Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(data);
  });
