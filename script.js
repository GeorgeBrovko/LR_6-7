let productsList = document.getElementById('products-list');
let products = [];

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
    let card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <div class="info">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="price">${product.price} ₽</div>
        <button onclick="openProductDetailModal(${product.id})">Подробнее</button>
      </div>
    `;
    productsList.appendChild(card);
  });
}

let searchInput = document.getElementById('search');
let searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', applyFilters);

function applyFilters() {
  let searchText = searchInput.value.toLowerCase();
  let filtered = products.filter(product => {
    let matchesSearch = product.title.toLowerCase().includes(searchText);
    return matchesSearch;
  });
  renderProducts(filtered);
}

let detailProductName = document.getElementById('detail-product-name');
let detailProductImage = document.getElementById('detail-product-image');
let detailProductDescription = document.getElementById('detail-product-description');
let detailProductPrice = document.getElementById('detail-product-price');
let productDetailModal = document.getElementById('product-detail-modal');

function openProductDetailModal(productId) {
  let product = products.find(p => p.id === productId);
  if (product) {
    detailProductName.textContent = product.title;
    detailProductImage.src = product.thumbnail;
    detailProductDescription.textContent = product.description;
    detailProductPrice.textContent = `${product.price} ₽`;
    productDetailModal.style.display = 'block';
  }
}

let closeDetailModal = productDetailModal.querySelector('.close');
let addProductModal = document.getElementById('add-product-modal');
let addProductBtn = document.getElementById('add-product-btn');
let closeAddModal = addProductModal.querySelector('.close');
let fileInput = document.getElementById('product-image');
let fileNameSpan = document.getElementById('file-name');

closeDetailModal.addEventListener('click', () => {
  productDetailModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === productDetailModal) {
    productDetailModal.style.display = 'none';
  }
});

addProductBtn.addEventListener('click', () => {
  addProductModal.style.display = 'block';
});

closeAddModal.addEventListener('click', () => {
  addProductModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === addProductModal) {
    addProductModal.style.display = 'none';
  }
});

fileInput.addEventListener('change', function() {
  if (fileInput.files.length > 0) {
    fileNameSpan.textContent = fileInput.files[0].name;
  } else {
    fileNameSpan.textContent = 'Файл не выбран';
  }
});

let addProductForm = document.getElementById('add-product-form');

addProductForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let productName = document.getElementById('product-name').value;
  let productDescription = document.getElementById('product-description').value;
  let productPrice = parseFloat(document.getElementById('product-price').value);
  let productImage = document.getElementById('product-image').files[0];

  if (productName && productDescription && productPrice && productImage) {
    let newProduct = {
      id: products.length + 1,
      title: productName,
      description: productDescription,
      price: productPrice,
      thumbnail: URL.createObjectURL(productImage)
    };

    products.push(newProduct);
    renderProducts(products);
    addProductForm.reset();
    fileNameSpan.textContent = 'Файл не выбран';
    addProductModal.style.display = 'none';
    alert('Товар успешно добавлен!');
  } else {
    alert('Пожалуйста, заполните все поля.');
  }
});

fetchProducts();