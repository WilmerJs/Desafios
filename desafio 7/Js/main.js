let precioProducto = document.getElementById('precioProducto')
let titulo = document.querySelector('#nombreProducto')


setTimeout (()=> {
    precioProducto.innerText = 'Precio: 999$'
    titulo.style.color = 'red'
}, 3000)

