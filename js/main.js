function calcularIva (precio) {
    return precio + (precio * 21 / 100);
}

function calcularTresCuotas (total) {
    totalParseado = parseInt(total);
    totalParseado = totalParseado + (totalParseado * 30) / 100;
    alert('Precio + 30% de interes: '+ totalParseado);
    totalParseado = totalParseado / 3;
    alert('Valor de cada Cuota: $'+ totalParseado);
}

function calcularSeisCuotas (total) {
    totalParseado = parseInt(total);
    totalParseado = totalParseado + (totalParseado * 40) / 100;
    alert('Precio + 40% de interes: '+ totalParseado);
    totalParseado = totalParseado / 6;
    alert('Valor de cada Cuota: $'+ totalParseado);
}

function calcularDoceCuotas (total) {
    totalParseado = parseInt(total);
    totalParseado = totalParseado + (totalParseado * 60) / 100;
    alert('Precio + 60% de interes: '+ totalParseado);
    totalParseado = totalParseado / 12;
    alert('Valor de cada Cuota: $'+ totalParseado);
}

let precioProducto;
let contador = 0;
let total = 0;
do{
    precioProducto = prompt ('Ingrese precio del producto o FIN para terminar: ');
    const precioProductoParseado = parseFloat(precioProducto);
    if (precioProductoParseado){
        contador= contador + 1;
        total= total + calcularIva(precioProductoParseado);
        alert('Precio con IVA: '+calcularIva(precioProductoParseado));
        alert('Cantidad de Productos: '+ contador);
    }
}while (precioProducto !='FIN');
alert ('Precio total a pagar es de: $'+ total);

respuesta = prompt ('Desea pagar en Cuotas? S/N');
if (respuesta != 'N') {
    respuesta = prompt ('Ingrese la cantidad de cuotas que desea: 3, 6 o 12')
    switch (respuesta) {
        case "3":
            alert (calcularTresCuotas(total));
            break;
        case "6":
            alert(calcularSeisCuotas(total));
            break;
        case "12":
            alert(calcularDoceCuotas(total));
            break;
    }
}else {
    alert ('Precio total a pagar en efectivo es de: $'+ total);
}

alert ('Gracias por su compra!');