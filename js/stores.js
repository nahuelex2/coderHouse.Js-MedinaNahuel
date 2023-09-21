import { stores } from "./listStores.js";
const id = sessionStorage.getItem('industryId');
let cards = ''
const storeContainer = document.querySelector('.storesContainer')


let storesByIndustries = stores.filter(store => store.industryCategory === parseInt(id))
console.log(storesByIndustries);
storesByIndustries.forEach(store => {
    cards += `
    <div class="cardStore" id="${store.id}">

    <img class="cardStore__logo" src="../imgs/hamburguer.png" alt="">

    <div class="cardStore__content">
        <h2 class="cardStore__title">${store.name}</h2>
        <p class="cardStore__shippingTime">${store.shippingTime} . Envio $${store.shippingFee}</p>
    </div>
</div>
    `
})

storeContainer.innerHTML = storesByIndustries.length > 0 ? cards : "<h2>no hay  tiendas por ahora</h2>"


storeContainer.childNodes.forEach(cardStore => {
    cardStore.addEventListener('click', () => {

        sessionStorage.setItem('storeId', cardStore.id)
        window.location.href = 'products.html'
    })
})