const productsList = document.getElementById('products-list');
const searchInput = document.getElementById('search');
const sizeFilter = document.getElementById('size-filter');
const colorFilter = document.getElementById('color-filter');
const genderFilter = document.getElementById('gender-filter');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
const activityFilter = document.getElementById('activity-filter');
const weightFilter = document.getElementById('weight-filter');
const typeFilter = document.getElementById('type-filter');
const filterBtn = document.getElementById('filter-btn');
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
const addProductBtn = document.getElementById('add-product-btn');
const addProductModal = document.getElementById('add-product-modal');
const closeModal = document.querySelector('.close');
const addProductForm = document.getElementById('add-product-form');
const productDetailModal = document.getElementById('product-detail-modal');
const detailProductName = document.getElementById('detail-product-name');
const detailProductImage = document.getElementById('detail-product-image');
const detailProductDescription = document.getElementById('detail-product-description');
const detailProductPrice = document.getElementById('detail-product-price');
const closeDetailModal = productDetailModal.querySelector('.close');

let products = [];
let cart = [];

function fetchProducts() {
  fetch('https://dummyjson.com/products?limit=30')
    .then(response => response.json())
    .then(data => {
      products = data.products;
      renderProducts(products);
    })
    .catch(error => {
      productsList.innerHTML = '<p>Ошибка загрузки товаров. Попробуйте позже.</p>';
      console.error('Ошибка при получении данных:', error);
    });
}

function renderProducts(productArray) {
  productsList.innerHTML = '';

  if (productArray.length === 0) {
    productsList.innerHTML = '<p class="not-found">Товары не найдены.</p>';
    return;
  }

  productArray.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <div class="info">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="price">${product.price} ₽</div>
        <button onclick="addToCart(${product.id})">Добавить в корзину</button>
        <button onclick="openProductDetailModal(${product.id})">Подробнее</button>
      </div>
    `;

    productsList.appendChild(card);
  });
}

filterBtn.addEventListener('click', applyFilters);
searchInput.addEventListener('input', applyFilters);

function applyFilters() {
  const searchText = searchInput.value.toLowerCase().trim();
  const selectedSize = sizeFilter.value;
  const selectedColor = colorFilter.value;
  const selectedGender = genderFilter.value;
  const minPrice = parseFloat(minPriceInput.value) || 0;
  const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
  const selectedActivity = activityFilter.value;
  const selectedWeight = weightFilter.value;
  const selectedType = typeFilter.value;

  const filtered = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchText);
    const matchesSize = selectedSize === '' || product.size === selectedSize;
    const matchesColor = selectedColor === '' || product.color === selectedColor;
    const matchesGender = selectedGender === '' || product.gender === selectedGender;
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    const matchesActivity = selectedActivity === '' || product.activity === selectedActivity;
    const matchesWeight = selectedWeight === '' || product.weight === selectedWeight;
    const matchesType = selectedType === '' || product.type === selectedType;
    return matchesSearch && matchesSize && matchesColor && matchesGender && matchesPrice && matchesActivity && matchesWeight && matchesType;
  });

  renderProducts(filtered);
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    cartCount.textContent = cart.length;
    alert(`Товар "${product.title}" добавлен в корзину!`);
  }
}

cartBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Корзина пуста!');
    return;
  }

  let message = 'Ваша корзина:\n\n';
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.title} - ${item.price} ₽\n`;
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  message += `\nИтого: ${total} ₽`;

  alert(message);
});

addProductBtn.addEventListener('click', () => {
  addProductModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  addProductModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === addProductModal) {
    addProductModal.style.display = 'none';
  }
});

addProductForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const productName = document.getElementById('product-name').value;
  const productDescription = document.getElementById('product-description').value;
  const productPrice = parseFloat(document.getElementById('product-price').value);
  const productImage = document.getElementById('product-image').files[0];

  if (productName && productDescription && productPrice && productImage) {
    const newProduct = {
      id: products.length + 1,
      title: productName,
      description: productDescription,
      price: productPrice,
      thumbnail: URL.createObjectURL(productImage)
    };

    products.push(newProduct);
    renderProducts(products);
    addProductForm.reset();
    addProductModal.style.display = 'none';
    alert('Товар успешно добавлен!');
  } else {
    alert('Пожалуйста, заполните все поля.');
  }
});

function openProductDetailModal(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    detailProductName.textContent = product.title;
    detailProductImage.src = product.thumbnail;
    detailProductDescription.textContent = product.description;
    detailProductPrice.textContent = `${product.price} ₽`;
    productDetailModal.style.display = 'block';
  }
}

closeDetailModal.addEventListener('click', () => {
  productDetailModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === productDetailModal) {
    productDetailModal.style.display = 'none';
  }
});

fetchProducts();