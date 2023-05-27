const AñoN = parseInt(prompt("Fecha de nacimiento"));
const AñoA = 2023;

if (AñoN < 2000){
    let Red = AñoA - AñoN;
    let Dias = Red * 365;
    let Horas = Dias * 24;
    
    console.log(`Su fecha de nacimiento es ${AñoN}, a vivido ${Dias} días y ${Horas} horas`);
}
