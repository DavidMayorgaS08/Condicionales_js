const Resp= prompt("Tiene banda ancha?");
const banda = parseInt(prompt("Cual es la banda ancha"))

if (Resp == "si") {
    aument = banda * 230 / 100;
    aumentT = banda + aument;
    console.log(`La velocidad anterior era de ${banda} y la velocidad actual es de ${aumentT}`);
}else{
    console.log(`La banda actual es ${banda}, no tiene aumento`);
}