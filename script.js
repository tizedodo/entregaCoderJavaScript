let opcion = prompt ("inregresa 1 para comprar y 2 para vender dolares");

const impuestoPais = (monto) => monto * 0.30;
const percepcion = (monto) => monto * 0.35;


function calcularPrecioCompra(monto) {
    return monto + impuestoPais(monto) + percepcion(monto) 
}


if (opcion == 1) {
    let precioCompra = 135;
    let montoAcomprar = prompt ("ingresa la cantidad de dolares a comprar");
    let monto = montoAcomprar * precioCompra;
    let montoApagar = calcularPrecioCompra(monto);
    alert(`para comprar $ ${montoAcomprar} dolares necesitas un total de : $ ${montoApagar}`);
}

else if (opcion == 2){
    let precioVenta = 124;
    let montoAvender = prompt ("ingresa la cantidad de dolares a vender");
    let monto = montoAvender * precioVenta;
    alert(`para comprar $ ${montoAvender} dolares necesitas un total de : $ ${monto}`)

}
else{
    alert("opcion no disponible");
}


