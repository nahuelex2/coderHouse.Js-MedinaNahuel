import { industryCategories } from "./industries.js";
import { stores } from "./stores.js"

let industries = industryCategories.map((industry, index) => {

    return {
        industry,
        orden: index + 1
    }
}).map(industry => `  ${industry.orden}) ${industry.industry.name}`)
let id_industry = 0
let value = parseInt(prompt(`Escribe  el  numero para ingresar  al rubro  deseado  \n ${industries}`))
switch (value) {
    case 1:

        id_industry = industryCategories.find(industry => industry.name == 'Restaurantes').id
        break;
    case 2:
        id_industry = industryCategories.find(industry => industry.name == 'Farmacias').id
        break;
    case 3:
        id_industry = industryCategories.find(industry => industry.name == 'Mascotas').id
        break;
    default:
        break;
}

const getStores = stores.filter(store => store.industryCategory == id_industry)
let test = ``

getStores.forEach(store => {
    test += `${store.name}\n\n`
    store.products.sort(prod => prod.category)

    store.products.forEach(product => {



        test += `categoria: ${product.category}\n ${product.name}: ${product.price} \n \n`



    })

    test += `----------------\n`
})

alert(test)
