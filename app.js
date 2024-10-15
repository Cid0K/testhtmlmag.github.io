let productCounts = {};
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.hide();

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
    mb.textContent ='показана2'
    tg.MainButton.setText("Купить");
  
  } else {
    tg.MainButton.hide();
    mb.textContent ='скрыта'
}
}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(JSON.stringify(data));
});

function updateCount(productId, decrement = false) {
  const quantityElement = document.getElementById(`quantity${productId}`); // Correctly using template literals
  const priceSpan = document.getElementById(`price${productId}`); // Use productId, not itemId
  let count = productCounts[productId] || 0; 

  // Update the count based on decrement
  if (decrement && count > 0) {
    count--;
  } else {
    count++;
  }

  productCounts[productId] = count; // Store the updated count

  // Update the quantity display
  quantityElement.textContent = count; 
  quantityElement.style.display = count > 0 ? 'inline' : 'none'; 

  // Update button states
  const addButton = document.getElementById(`btn${productId}`); 
  const decrementButton = document.getElementById(`decrement${productId}`); 

  if (count > 0) {
    addButton.textContent = '+';
    addButton.classList.add('mini'); 
    decrementButton.classList.add('show'); 
  } else {
    addButton.textContent = 'Купить'; // Set button text to "Купить"
    addButton.classList.remove('mini'); 
    decrementButton.classList.remove('show'); 
  }

  // Update the price based on count (not quantity)
  if (count > 1) {
    priceSpan.textContent = "190р.";
  } else {
    priceSpan.textContent = "210р.";
  }

  // Update data (assuming updateData() is your function for saving changes)
  updateData(); 
}
