const Pasivo= parseInt(prompt("Ingresos pasivos"));
const Patrim= parseInt(prompt("Patrimonio"));

let Activo = Pasivo + Patrim;
let Pas = Activo - Patrim

if (Pas > 0){
    console.log(`Tiene ganacias`);
}else if (Pas < 0){
    console.log(`Tiene perdida`);
}else{
    console.log(`Tiene saldo en cero`);
}