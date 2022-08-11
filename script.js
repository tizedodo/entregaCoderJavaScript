let contImpuesto = function(cantDolar){
    let dolarApesos = cantDolar * 140
    let impuestopais = dolarApesos*75/100
    return impuestopais + dolarApesos
}

let nombre = prompt("porfavor ingresa su nombre")
let cantDolar = parseInt(prompt("Porfavor ingresa el monto del producto en dolar, Solo numero:"))


alert(nombre + " por el producto pagaras un total de $" + contImpuesto(cantDolar) + " pesos Argentinos.")

console.log(contImpuesto(cantDolar))


