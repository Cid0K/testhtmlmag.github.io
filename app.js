(function(){
    // ========= Инициализация Telegram WebApp =========
    let productCounts = {};
    const tg = window.Telegram.WebApp;
    tg.expand();
    tg.MainButton.textColor = '#FFFFFF';
    tg.MainButton.color = '#2cab37';
    tg.MainButton.hide();

    // ========= Объект данных для отправки =========
    const data = {
        products: [],
        city: ''
    };

    // ========= Элементы интерфейса =========
    const dataDisplay = document.getElementById('data');
    const selectedCityDisplay = document.getElementById('selected-city');

    // ========= Выбранный город =========
    // Получаем выбранное значение из localStorage или устанавливаем значение по умолчанию
    let selectedCity = localStorage.getItem('selectedCity') || 'Архангельск';

    // Функция для обновления отображения выбранного города
    function setSelectedCityDisplay(){
        selectedCityDisplay.textContent = selectedCity || 'Архангельск';
    }

    // ========= Функция обновления данных и итоговой суммы =========
    function updateData() {
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
    
        // Вычисляем итоговую сумму заказа с учётом скидки для товара с id===1
        let total = 0;
        data.products.forEach(item => {
            let unitPrice = getPrice(item.id);
            if (parseInt(item.id, 10) === 1 && item.quantity > 1) {
                unitPrice = unitPrice - 40;
            }
            total += unitPrice * item.quantity;
        });
    
        if (data.products.length > 0) {
            tg.MainButton.show();
            tg.MainButton.setText(`Купить: ${total}р.`);
        } else {
            tg.MainButton.hide();
        }
        dataDisplay.textContent = JSON.stringify(data, null, 2);
        setSelectedCityDisplay();
    }
    
    // Обработчик нажатия на основную кнопку Telegram WebApp
    Telegram.WebApp.onEvent("mainButtonClicked", function () {
        tg.sendData(JSON.stringify(data));
    });
  
    // ========= Функция для получения цены товара с учётом выбранного города =========
    // Массив products должен быть определён в products.js (подключается до этого скрипта)
    function getPrice(productId) {
        const product = products.find(p => p.id === parseInt(productId, 10));
        if (!product) {
            console.error(`Товар с id ${productId} не найден.`);
            return 0;
        }
        if (product.prices && product.prices[selectedCity]) {
            return product.prices[selectedCity];
        } else {
            console.error(`Цена для города ${selectedCity} для товара ${productId} не найдена.`);
            return 0;
        }
    }
  
    // ========= Функция для обновления количества товара =========
    function updateCount(productId, decrement = false) {
        const item = document.querySelector(`.item[data-item-id="${productId}"]`);
        const quantityElement = item.querySelector(`.quantity[data-quantity-id="${productId}"]`);
        const addButton = item.querySelector(`.btn[data-btn-id="${productId}"]`);
        const decrementButton = item.querySelector(`.btn-decrement[data-decrement-id="${productId}"]`);
    
        let count = productCounts[productId] || 0;
        // Пример особой логики для товаров с id 2 или 3
        if (productId == 2 || productId == 3) {
            if (decrement) {
                count = count > 10 ? count - 1 : 0;
            } else {
                count = (count === 0) ? 10 : count + 1;
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
        quantityElement.style.display = count > 0 ? 'inline' : 'none';
    
        if (count > 0) {
            addButton.classList.add('mini');
            addButton.textContent = '+';
            decrementButton.classList.add('show');
        } else {
            addButton.classList.remove('mini');
            addButton.textContent = 'Купить';
            decrementButton.classList.remove('show');
        }
    
        updateData();
        updateAllPrices();
    }
  
    // ========= Функция создания элемента товара =========
    function createProductItem(productId) {
        const product = products.find(p => p.id === parseInt(productId, 10));
        if (!product) {
            console.error(`Товар с id ${productId} не найден.`);
            return null;
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
        // При первоначальном создании отображаем базовую (единичную) цену
        price.textContent = ` ${getPrice(productId)}р.`;
        price.dataset.priceId = productId;
    
        itemName.appendChild(document.createTextNode(' '));
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
    
    // ========= Функция добавления товаров в контейнер =========
    function addProducts() {
        const container = document.getElementById('inner-container');
        if (!products || !Array.isArray(products)) {
            console.error("Products не определены или не являются массивом.");
            return;
        }
        container.innerHTML = ''; // Очистка контейнера перед добавлением
        products.forEach(product => {
            const itemElement = createProductItem(product.id);
            if (itemElement) {
                container.appendChild(itemElement);
            }
        });
    }
    
    // ========= Функция обновления цен для всех товаров =========
    function updateAllPrices() {
        document.querySelectorAll('.item').forEach(item => {
            const productId = item.dataset.itemId;
            const priceElement = item.querySelector('.price');
            const quantityElement = item.querySelector('.quantity');
            const quantity = parseInt(quantityElement.textContent, 10) || 0;
            let basePrice = getPrice(productId);
            // Если товар с id===1 и его количество больше 1, применяем скидку
            if (parseInt(productId, 10) === 1 && quantity > 1) {
                priceElement.textContent = `${basePrice - 40}р.`;
            } else {
                priceElement.textContent = `${basePrice}р.`;
            }
        });
    }
    
    // ========= Функция динамического создания кнопок городов =========
    function populateCityButtons() {
        const citySelector = document.getElementById('city-selector');
        if (!citySelector) {
            console.error('Контейнер с id "city-selector" не найден.');
            return;
        }
        const cityButtonsContainer = citySelector.querySelector('.city-buttons');
        if (!cityButtonsContainer) {
            console.error('Контейнер для кнопок городов (.city-buttons) не найден.');
            return;
        }
        // Собираем уникальные города из ключей prices всех товаров
        const citySet = new Set();
        products.forEach(product => {
            if (product.prices) {
                Object.keys(product.prices).forEach(city => citySet.add(city));
            }
        });
        // Преобразуем в массив и сортируем по алфавиту (без учёта регистра)
        const cities = Array.from(citySet).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    
        cityButtonsContainer.innerHTML = ''; // Очистка контейнера
        cities.forEach(city => {
            const btn = document.createElement('button');
            btn.textContent = city;
            btn.classList.add('city-button');
            btn.dataset.city = city;
            // Если требуется, можно задать локализованное название через data-cityRu
            btn.dataset.cityRu = city;
            if (selectedCity === city) {
                btn.classList.add('active');
            }
            btn.addEventListener('click', (event) => {
                // Используем event.currentTarget для получения data-атрибута
                selectedCity = event.currentTarget.dataset.city;
                localStorage.setItem('selectedCity', selectedCity);
                setActiveCityButton(selectedCity);
                updateData();
                updateAllPrices();
                citySelector.classList.remove('open');
            });
            cityButtonsContainer.appendChild(btn);
        });
    }
    
    // ========= Функция установки активной кнопки города =========
    function setActiveCityButton(city) {
        const cityButtons = document.querySelectorAll('.city-button');
        cityButtons.forEach(button => {
            if (button.dataset.city === city) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    // ========= Обработчики для открытия/закрытия меню выбора города =========
    const settingsBtn = document.getElementById('selected-city-button');
    const citySelector = document.getElementById('city-selector');
    settingsBtn.addEventListener('click', () => {
        citySelector.classList.toggle('open');
    });
    
    document.addEventListener('click', (event) => {
        if (!settingsBtn.contains(event.target) && !citySelector.contains(event.target)) {
            citySelector.classList.remove('open');
        }
    });
    
    // ========= Инициализация: установка нулевого количества для каждого товара =========
    if (typeof products !== 'undefined' && Array.isArray(products)) {
        products.forEach(product => {
            productCounts[product.id] = 0;
        });
    } else {
        console.error("Products не определены или не являются массивом");
    }
    
    // ========= Первоначальные вызовы =========
    setSelectedCityDisplay();
    populateCityButtons();
    addProducts();
    updateData();
    
})();
