let products = [
    {
        id: 1,
        name: "Смартфон Galaxy X",
        description: "Современный смартфон с отличной камерой",
        price: 29990,
        image: "s-l1600.jpg",
        category: "electronics",
        color: "turquoise",
        size: "m"
    },
    {
        id: 2,
        name: "Наушники ProSound",
        description: "Беспроводные наушники с шумоподавлением",
        price: 7990,
        image: "Image-1.jpg",
        category: "electronics",
        color: "black",
        size: "l"
    },
    {
        id: 3,
        name: "Ноутбук UltraBook 14",
        description: "Легкий и мощный ноутбук для работы и учебы",
        price: 55990,
        image: "1239810_2.jpeg",
        category: "electronics",
        color: "black",
        size: "l"
    },
    {
        id: 4,
        name: "Куртка зимняя Arctic",
        description: "Теплая куртка для холодной зимы",
        price: 12990,
        image: "s-l1601.jpg",
        category: "clothing",
        color: "black",
        size: "xl"
    },
    {
        id: 5,
        name: "Кроссовки RunFast",
        description: "Легкие кроссовки для бега",
        price: 4990,
        image: "18697337-718a-4dd6-8902-d1476970b0c4.jpeg",
        category: "clothing",
        color: "pink",
        size: "m"
    },
    {
        id: 6,
        name: "Футболка Casual",
        description: "Удобная хлопковая футболка",
        price: 990,
        image: "0770478044460170dd3997b69cdd0e17b7c627cc_original.jpeg",
        category: "clothing",
        color: "black",
        size: "l"
    },
    {
        id: 7,
        name: "Часы SmartTime",
        description: "Умные часы с пульсометром",
        price: 8990,
        image: "cck.jpg",
        category: "electronics",
        color: "white",
        size: "m"
    },
    {
        id: 8,
        name: "Рюкзак TravelPro",
        description: "Прочный рюкзак для путешествий",
        price: 3590,
        image: "da660aa85d8b5737d042f9c27c468769.jpeg",
        category: "accessories",
        color: "green",
        size: "l"
    },
    {
        id: 9,
        name: "Книга 'Программирование на JS'",
        description: "Полное руководство по JavaScript",
        price: 1490,
        image: "6451fc3ddf9c3.jpg.jpeg",
        category: "books",
        color: "yellow",
        size: "m"
    },
    {
        id: 10,
        name: "Планшет TabView 10",
        description: "Планшет с большим экраном для мультимедиа",
        price: 24990,
        image: "galaxy-view-2_02.jpg",
        category: "electronics",
        color: "silver",
        size: "l"
    },
    {
        id: 11,
        name: "Очки солнцезащитные SunnyStyle",
        description: "Модные очки с UV-защитой",
        price: 1890,
        image: "4d24af6a02ecd8aed2ec601c211f6800.jpg",
        category: "accessories",
        color: "pink",
        size: "m"
    },
    {
        id: 12,
        name: "Ботинки Steel",
        description: "Комфортный спальный мешок для кемпинга",
        price: 4990,
        image: "e4ad532f23b4ab2fe410c17b15dd012d.jpg",
        category: "clothing",
        color: "black",
        size: "xl"
    },
    {
        id: 13,
        name: "Платье Summer Breeze",
        description: "Легкое платье для жаркой погоды",
        price: 3990,
        image: "i.jpeg",
        category: "clothing",
        color: "blue",
        size: "m"
    },
    {
        id: 14,
        name: "Блендер KitchenPro",
        description: "Многофункциональный блендер для кухни",
        price: 6990,
        image: "kitchenaid_5ksb1585ecl_1.jpg",
        category: "electronics",
        color: "blue",
        size: "m"
    },
    {
        id: 15,
        name: "Флешка USB 64GB",
        description: "Надежный носитель информации",
        price: 990,
        image: "i_2.jpeg",
        category: "electronics",
        color: "white",
        size: "s"
    },
    {
        id: 16,
        name: "Мышка Wireless Click",
        description: "Беспроводная мышка с эргономичным дизайном",
        price: 1590,
        image: "i435c40wdvmyctxqiugl51yp1dzfht7s.jpeg",
        category: "electronics",
        color: "white",
        size: "m"
    },
    {
        id: 17,
        name: "Джинсы Classic Fit",
        description: "Классические джинсы средней посадки",
        price: 4490,
        image: "i_3.jpeg",
        category: "clothing",
        color: "blue",
        size: "l"
    },
    {
        id: 18,
        name: "Шапка зимняя WarmHat",
        description: "Шапка с подкладкой для холодной зимы",
        price: 1290,
        image: "i_4.jpeg",
        category: "clothing",
        color: "gray",
        size: "m"
    },
    {
        id: 19,
        name: "Ботинки Trekking Pro",
        description: "Прочные ботинки для туризма",
        price: 8990,
        image: "6938437737.jpg",
        category: "clothing",
        color: "brown",
        size: "xl"
    },
    {
        id: 20,
        name: "Лампа настольная DeskLight",
        description: "Регулируемая светодиодная лампа",
        price: 2290,
        image: "6190667208.jpg",
        category: "electronics",
        color: "white",
        size: "m"
    }
];


let cart = [];

const productsList = document.getElementById("products-list");
const searchInput = document.getElementById("search");

function renderProducts(filteredProducts = products) {
    productsList.innerHTML = "";
    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        const img = document.createElement("img");
        img.src = product.image || "https://via.placeholder.com/250x200?text=Нет+изображения";

        const info = document.createElement("div");
        info.className = "info";

        const title = document.createElement("h3");
        title.textContent = product.name;

        const desc = document.createElement("p");
        desc.textContent = product.description;

        const price = document.createElement("div");
        price.className = "price";
        price.textContent = product.price + " ₽";

        // Кнопка "Просмотр"
        const btnView = document.createElement("button");
        btnView.textContent = "Просмотр";
        btnView.onclick = () => openViewProduct(product);

        // Кнопка "Добавить в корзину"
        const btnAddToCart = document.createElement("button");
        btnAddToCart.textContent = "Добавить в корзину";
        btnAddToCart.onclick = () => addToCart(product.id);


        info.appendChild(title);
        info.appendChild(desc);
        info.appendChild(price);

        card.appendChild(img);
        card.appendChild(info);
        card.appendChild(btnView);
        card.appendChild(btnAddToCart);

        productsList.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        alert("Товар не найден!");
        return;
    }

    cart.push(product);
    updateCartCount();
    alert(`Товар "${product.name}" добавлен в корзину!`);
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.textContent = cart.length;
}


function openViewProduct(product) {
    const modal = document.getElementById("view-product-modal");
    const content = document.getElementById("view-product-content");

    content.innerHTML = `
        <span class="close" onclick="closeModal('view-product-modal')">&times;</span>
        <h2>${product.name}</h2>
        <img src="${product.image || 'https://via.placeholder.com/250x200?text=Нет+изображения'}" style="width:100%; height:auto;">
        <p>${product.description}</p>
        <div class="price">${product.price} ₽</div>
    `;

    modal.style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

document.getElementById("add-product-btn").onclick = () => {
    document.getElementById("add-product-modal").style.display = "flex";
};

document.getElementById("close-add-modal").onclick = () => {
    closeModal("add-product-modal");
};

document.getElementById("save-product-btn").onclick = () => {
    const name = document.getElementById("product-name").value;
    const description = document.getElementById("product-description").value;
    const price = parseFloat(document.getElementById("product-price").value);
    const imageFile = document.getElementById("product-image").files[0];
    const category = document.getElementById("product-category").value;
    const color = document.getElementById("product-color").value;
    const size = document.getElementById("product-size").value;

    if (!name || !description || isNaN(price)) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const newProduct = {
            id: products.length + 1,
            name,
            description,
            price,
            image: e.target.result,
            category,
            color,
            size
        };

        products.push(newProduct);
        renderProducts();
        closeModal("add-product-modal");

        // Сброс формы
        document.getElementById("product-name").value = "";
        document.getElementById("product-description").value = "";
        document.getElementById("product-price").value = "";
        document.getElementById("product-image").value = "";
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    } else {
        alert("Пожалуйста, выберите изображение!");
    }
};

document.getElementById("apply-filters").onclick = () => {
    const category = document.getElementById("category-filter").value;
    const color = document.getElementById("color-filter").value;
    const size = document.getElementById("size-filter").value;
    const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
    const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;

    const filtered = products.filter(product =>
        (category === "all" || product.category === category) &&
        (color === "all" || product.color === color) &&
        (size === "all" || product.size === size) &&
        (product.price >= minPrice && product.price <= maxPrice)
    );

    renderProducts(filtered);
};

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchText)
    );

    renderProducts(filtered);
});

window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

renderProducts();
