const Libros = parseInt(prompt("Cantidad de libros de la biblioteca"));

let Tlibros = Libros - 457;

if (Tlibros > 0){
    console.log(`La biblioteca si tiene libros`);
}else{
    console.log(`La biblioteca no tiene libros`);
}