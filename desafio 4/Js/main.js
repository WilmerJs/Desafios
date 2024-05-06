// console.log('PRUEBA CONSOLA')

function sumarProductos(precioUnitario, cantidadDeseada) {
    
    let gastoTot = precioUnitario * cantidadDeseada
    return gastoTot
}

let precioProducto = 500
let cantidad = parseInt(prompt('Ingrese la cantidad de productos que va a comprar'))
let compraTotal = sumarProductos(precioProducto, cantidad)

console.log(`El gasto total fue de: ${compraTotal}`)