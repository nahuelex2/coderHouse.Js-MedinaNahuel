import { industryCategories } from "./js/listIndustries.js"

let industries = industryCategories
let industryCards = ''
const industriesContainer = document.getElementById('industryContainer')


industries.forEach(industry => {
    industryCards += `
    <div class="industryCard"  id= "${industry.id}">
    <h3 class="industryCard__title">${industry.name}</h3>
    <img class="industryCard__image" src="${industry.img}" alt="${industry.name}">
    </div>`

})

industriesContainer.innerHTML = industryCards

industriesContainer.childNodes.forEach(industryCard => {
    industryCard.addEventListener('click', () => {
        sessionStorage.setItem('industryId', industryCard.id)
        window.location.href = 'pages/stores.html'
    })
})