let productCounts = {};
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.hide();

const data = {
  products: []
};

//const tt = document.getElementById("data"); 

function updateData() {
  console.log('updateData() called');
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
  //tt.textContent = JSON.stringify(data, null, 2);

  if (data.products.length > 0) {
    tg.MainButton.show();
    //mb.textContent ='показана'
    tg.MainButton.setText("Купить");
  
  } else {
    tg.MainButton.hide();
    //mb.textContent ='скрыта'
}
}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(JSON.stringify(data));
});

function updateCount(productId, decrement = false) {
  const quantityElement = document.getElementById(`quantity${productId}`); // Используйте обратные кавычки
  const priceSpan = document.getElementById(`price${productId}`); // Используйте обратные кавычки
  let count = productCounts[productId] || 0;
 
  if (decrement && count > 0) {
   count--;
  } else {
   count++;
  }
 
  productCounts[productId] = count;
 
  quantityElement.textContent = count;
  quantityElement.style.display = count > 0 ? 'inline' : 'none';
 
  const addButton = document.getElementById(`btn${productId}`); // Используйте обратные кавычки
  const decrementButton = document.getElementById(`decrement${productId}`); // Используйте обратные кавычки
 
  if (count > 0) {
   addButton.textContent = '+';
   addButton.classList.add('mini');
   decrementButton.classList.add('show');
  } else {
   addButton.classList.remove('mini');
   decrementButton.classList.remove('show');
   setTimeout(() => {
    addButton.textContent = 'купить';
   }, 100);
  }
 
  if (count > 1) {
   if (priceSpan) { // Проверка, существует ли элемент
    priceSpan.textContent = "190р.";
   }
  } else {
   if (priceSpan) { // Проверка, существует ли элемент
    priceSpan.textContent = "210р.";
   }
  }
 
  updateData();
 }
 
