const GC= parseInt(prompt("Temperatura grados centigrados"));

if (GC < 23){
    console.log(`Hace frio`);
}else if(GC >= 23 && GC < 30){
    console.log(`Es un buen día`);
}else{
    console.log(`Hace calor`);
}
