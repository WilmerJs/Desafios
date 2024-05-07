/* console.log('PRUEBA CONSOLA') */

let productos = ['PlayStation', 'Xbox', 'Computadora', 'Escritorio', 'Nintendo']

for ( let i = 0; i < productos.length ; i++) {
    console.log(`NumProducto: ${i+1}Producto: ${productos[i]}`)
}

console.log('------------------------------------')

productos.pop()
for ( let i = 0 ; i < productos.length ; i++ ) {
    
    console.log(productos[i])
}