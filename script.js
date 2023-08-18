let value = ''
let bill = ''
let productName = ''
let subtotal = 0
let total = 0
let amount = 0
let productPrice = 0
let exit = false

function updateBill() {

    subtotal = 0
    subtotal += productPrice * amount

    total += subtotal

    bill += `Producto: ${productName} --  Precio Unitario: ${productPrice} -- Cant.: ${amount} -- Precio  Total: ${subtotal} \n`
    alert(`${bill} \n total: ${total}`)

}




do {

    value = prompt('Escribe el número según la opción que desees\n|1 - producto1 $50\n|2 - producto2 $100\n|3 - product3 $250\n|0 Salir')


    if (value == 1 || value == 2 || value == 3) {
        amount = parseInt(prompt('escribe la  cantidad deseada'))
    }

    if (!isNaN(amount)) {

        switch (value) {

            case '1':

                productName = 'product1'
                productPrice = 50;
                updateBill()
                break;
            case '2':
                productName = 'product2'
                productPrice = 100;
                updateBill()
                break;

            case '3':
                productName = 'product3'
                productPrice = 250;
                updateBill()
                break;
            case '0':
                exit = true;
                break;
            default:
                alert('valor invalido')

                break;
        }

    } else {

        alert('valor invalido')
    }

} while (!exit);