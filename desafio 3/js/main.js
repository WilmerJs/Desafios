console.log("PRUEBA")

let nombreProducto = "Remeras"
let precioUnitario = 5000 //Remeras
cantidadDeseada = parseInt(prompt("Ingrese la cantidad de " + nombreProducto + " que desea comprar"))

let costoTotalSinDescuentos = precioUnitario * cantidadDeseada

if ( cantidadDeseada >= 5 ) {
    costoTotalSinDescuentos *= 0.9
}

alert("El costo total con descuento es de: " + costoTotalSinDescuentos)