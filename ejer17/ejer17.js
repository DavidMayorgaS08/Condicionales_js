const goles1= parseInt(prompt("Goles anotados en el encuentro 1"));
const goles2= parseInt(prompt("Goles anotados en el encuentro 2"));
const goles3= parseInt(prompt("Goles anotados en el encuentro 3"));
const goles4= parseInt(prompt("Goles anotados en el encuentro 4"));

let suma = goles1 + goles2 + goles3 + goles4;

if(suma > 20){
    Prom = suma * 4 / 100;
    console.log(`El promedio de goles anotados en los 4 encuentros es de ${Prom} goles`);
}else{
    console.log(`La suma es de ${suma}`);
}