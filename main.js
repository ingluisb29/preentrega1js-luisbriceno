/*productos
cliente
budinDeLimon = 1000
macarron = 700
hojaldre = 250
carrotCake = 1500
iva = 1.21
cantidad
precioSinIva
descuento
factura
cuotas
intereses
*/



let budin = 1000
let macarron = 700
let hojaldre = 250
let carrotCake = 1500 

alert ("Bienvenido a mailinsweete el disponibles es budin, macarron, hojaldre, carrotCake")
let consulta = confirm(`son los postres que esta buscando?`) 
    

do{
            let producto = prompt("nombre del producto")
            let cantidad = parseInt(prompt("ingrese cantidad unidades"))
            if(producto == "budin"){
            let total = budin * cantidad
            let monto = confirm(`${total} desea otro producto`)
            }else if(producto == "macarron"){
            let total = macarron * cantidad
            let monto = confirm(`${total} desea otro producto`)
            }else if(producto == "hojaldre"){
            let total = hojaldre * cantidad
            let monto = confirm(`${total} desea otro producto`)
            }else if(producto == "carrotCake"){
            let total = carrotCake * cantidad
            let monto = confirm(`${total} desea otro producto`)
            }else{
                alert("hasta luego")
            }
}while(monto == false)

