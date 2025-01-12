let productCounts = {};
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.hide();

const data = {
    products: [],
    city: ''
};
const dataDisplay = document.getElementById('data');
const selectedCityDisplay = document.getElementById('selected-city');
setSelectedCityDisplay();

function setSelectedCityDisplay(){
    const cityButton = document.querySelector(`.city-button[data-city="${selectedCity}"]`);
      selectedCityDisplay.textContent = cityButton ? cityButton.dataset.cityRu : 'Архангельск';
  }


function updateData() {
    console.log('updateData() called');
    data.products = [];

    for (const productId in productCounts) {
        if (productCounts[productId] > 0) {
            data.products.push({
                id: productId,
                quantity: productCounts[productId]
            });
        }
    }
     data.city = selectedCity;

    if (data.products.length > 0) {
        tg.MainButton.show();
        tg.MainButton.setText("Купить");
    } else {
        tg.MainButton.hide();
    }
   dataDisplay.textContent = JSON.stringify(data, null, 2);
   setSelectedCityDisplay()
}

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(JSON.stringify(data));
});

function updateCount(productId, decrement = false) {
    const item = document.querySelector(`.item[data-item-id="${productId}"]`);
    const quantityElement = item.querySelector(`.quantity[data-quantity-id="${productId}"]`);
    const addButton = item.querySelector(`.btn[data-btn-id="${productId}"]`);
    const decrementButton = item.querySelector(`.btn-decrement[data-decrement-id="${productId}"]`);
    const priceSpan = item.querySelector(`.price[data-price-id="${productId}"]`);

    let count = productCounts[productId] || 0;
        if (productId == 2 || productId == 3) {
            if (decrement) {
                count = count > 10 ? count - 1 : 0;
            } else {
              if (count === 0) {
                   count = 10;
                } else {
                 count++;
               }
            }
        } else {
            if (decrement && count > 0) {
                count--;
            } else {
                count++;
            }
        }


    productCounts[productId] = count;
    quantityElement.textContent = count;
    if(count > 0) {
          quantityElement.style.display = 'inline';
     } else {
         quantityElement.style.display = 'none';
     }
    if (count > 0) {
       addButton.classList.add('mini');
        addButton.textContent = '+';
        decrementButton.classList.add('show');
    } else {
       addButton.classList.remove('mini');
       addButton.textContent = 'Купить';
       decrementButton.classList.remove('show');
    }
    if (productId == 1 && priceSpan) {
      const basePrice = getPrice(productId); // Получаем базовую цену
            if (count > 1) {
                priceSpan.textContent = `${basePrice - 40}р.`;
            } else {
                priceSpan.textContent = `${basePrice}р.`;
            }
        }

    updateData();
}

// Получаем кнопку настроек и меню выбора города
const settingsBtn = document.getElementById('selected-city-button');
const citySelector = document.getElementById('city-selector');
// Получаем все кнопки выбора города
const cityButtons = document.querySelectorAll('.city-button');


// Функция для установки активной кнопки
function setActiveCityButton(city) {
    cityButtons.forEach(button => {
        if (button.dataset.city === city) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Устанавливаем активную кнопку при загрузке страницы
setActiveCityButton(selectedCity);


// Обработчик клика по кнопке настроек
settingsBtn.addEventListener('click', () => {
  citySelector.classList.toggle('open');
});

// Добавляем обработчик клика на кнопки выбора города
cityButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        selectedCity = event.target.dataset.city;
        localStorage.setItem('selectedCity', selectedCity);
       setActiveCityButton(selectedCity);
        document.getElementById('inner-container').innerHTML = '';
         productCounts = {};
         updateData();// Обновляем интерфейс
         addProducts();
         citySelector.classList.remove('open');
    });
});

// Скрываем меню выбора города при клике вне его
document.addEventListener('click', (event) => {
  if (!settingsBtn.contains(event.target) && !citySelector.contains(event.target)) {
        citySelector.classList.remove('open');
  }
});

// Сбрасываем количество товаров при загрузке
for (const productId in products) {
  productCounts[productId] = 0;
}
updateData();
