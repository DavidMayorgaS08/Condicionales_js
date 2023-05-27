const valorC= parseInt(prompt("Valor al iniciar el día"));

let venta1 = valorC + 800000;

let ValorP = venta1 * 10 / 100;

if(ValorP > 50000){
    console.log(`El dinero inicial era de ${valorC}, el dinero con el que termino es de ${venta1 - ValorP} y le pago a los acreedores más de 50.000 y el pago fue de ${ValorP}`);
}else{
    console.log(`El dinero inicial era de ${valorC}, el dinero con el que termino es de ${venta1 - ValorP} y le pago a los acreedores ${ValorP}`);
}