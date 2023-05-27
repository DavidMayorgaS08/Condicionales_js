const nota = parseFloat(prompt("Ingrese la nota"));

if(nota >= 4.6){
    console.log(`EXCELENTE`);
}else if(nota >= 3.6 && nota <=4.5){
    console.log(`BUENO`);
}else if(nota >= 3.0 && nota <= 3.5){
    console.log(`ACEPTABLE`);
}else if(nota >= 2.0 && nota < 3.0){
    console.log(`INSUFICIENTE`);
}else{
    console.log(`DEFICIENTE`);
}