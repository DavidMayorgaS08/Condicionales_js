const pesoE= parseInt(prompt("Ingrese el peso del vehiculo"));

let reduc = pesoE * 15 / 100;
let pesoA = pesoE - reduc;

let PKil = pesoA * 1000;
let PGramos = PKil * 1000;

if (reduc > 3.5){
    console.log(`${PKil} kilogramos, ${PGramos} gramos, El vehículo quedó liviano`);
} else{
    console.log(`${PKil} kilogramos, ${PGramos} gramos`);
}
