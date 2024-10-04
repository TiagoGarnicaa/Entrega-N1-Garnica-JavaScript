
let cantidadRemeras = parseInt(prompt("Cuantas remeras desea comprar¨?"))
console.log("la cantidad de remeras que desea comprar es de ", cantidadRemeras, " remeras")

let cantidadPantalones = parseInt(prompt("Cuantos pantalones desea comprar?"))
console.log("la cantidad de pantalones que desea comprar es de ", cantidadPantalones, " pantalones")

let totalRemeras;
let totalPantalones;
let total;

for(let i = 0; i <= cantidadRemeras; i++){
    totalRemeras = i * 25000
}
for(let i = 0; i <= cantidadPantalones; i++){
    totalPantalones = i *40000
}

totalPagar(totalRemeras, totalPantalones, total)

function totalPagar(remeras, pantalones, total){
    total = remeras + pantalones
    console.log("El monto total a pagar es de: $", total)
}
