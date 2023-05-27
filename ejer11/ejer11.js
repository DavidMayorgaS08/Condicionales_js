const Pl= parseInt(prompt("Ingrese peso en libras"));

let kil = Pl / 2;

if (kil > 5){
    gramos = kil / 1000;
    console.log(`${gramos} gramos`);
}else{
    onzas = Pl * 16;
    console.log(`${onzas} onzas`);
}