const nota=parseInt(prompt("Nota del estudiante"));

switch (nota) {
    case 5:
        console.log(`EXCELENTE`);
    break;
    case 4:
        console.log(`BUENO`);
    break;
    case 3:
        console.log(`ACEPTABLE`);
    break;
    case 2:
        console.log(`INSUFICIENTE`);
    break;
    default:
        console.log(`DEFICIENTE`);
}