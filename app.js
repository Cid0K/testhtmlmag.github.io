let productCounts = {};
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

function updateCount(productId, decrement = false) {
  const quantityElement = document.getElementById(quantity${productId});
  let count = productCounts[productId] || 0;

  if (decrement && count > 0) {
    count--;
  } else {
    count++;
  }

  productCounts[productId] = count;

  quantityElement.textContent = count;
  quantityElement.style.display = count > 0 ? 'inline' : 'none';

  const addButton = document.getElementById(btn${productId});
  const decrementButton = document.getElementById(decrement${productId});
  const imgg = document.getElementById(img${productId});

  if (count > 0) {
    addButton.textContent = '+';
    addButton.classList.add('mini');
    decrementButton.classList.add('show');
    imgg.classList.add('rot'); 
  } else {
    addButton.textContent = 'купить';
    addButton.classList.remove('mini');
    decrementButton.classList.remove('show');
  }

  updateSendButtonState(); // Обновляем состояние кнопки после изменения количества
}


function sendOrderToTelegram() {
  const orderData = []; 

  for (const productId in productCounts) {
    if (productCounts[productId] > 0) {
      orderData.push({
        'id': productId, 
        'quantity': productCounts[productId] 
      });
    }
  }

  if (orderData.length > 0) {
    Telegram.WebApp.onEvent("mainButtonClicked", function() {
      Telegram.WebApp.sendData(orderData);
    });
    Telegram.WebApp.sendData(orderData); 
  }
}

function updateSendButtonState() {
  if (Object.values(productCounts).some(count => count > 0)) {
    tg.WebApp.MainButton.setParams({
      text: "Отправить заказ",
      show: true,
      type: 'primary'
    });
  } else {
    tg.WebApp.MainButton.setParams({
      show: false
    });
  }
}

Telegram.WebApp.MainButton.onEvent('click', sendOrderToTelegram); 

// Инициализация состояния кнопки при загрузке страницы
updateSendButtonState();
