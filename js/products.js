import { stores } from "./listStores.js";


const storeId = sessionStorage.getItem('storeId');
const productsContainer = document.querySelector('.productCardsContainer')
let cards = ''
const products = stores.find(store => store.id == storeId).products
console.log(products);

products.forEach(product => {
    cards += `
    <div class="productCard" id="${product.id}">
    <div class="productCard__content">
        <h2 class="productCard__title">${product.name}</h2>
        <p class="productCard__text">${product.description}</p>
        <h3 class ="productCard__price">$${product.price}</h3>
    </div>
    <img src="../imgs/empanadasCarne.jpg" alt="" class="productCard__img">
</div>
    `
})

productsContainer.innerHTML = cards;