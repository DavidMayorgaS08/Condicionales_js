const Pr= parseInt(prompt("Peso del ratón en gramos"));
const Pq= parseInt(prompt("Peso del queso en gramos"));

let prcenR= Pq * 1.1 / 100;
let PrA= Pr + prcenR;

let prcenQ= Pq * 40 / 100;
let PqA= Pq + prcenQ;

let Prq= PrA * 20 / 100

if(PrA < PqA){
    console.log(`El peso del ratón es de ${PrA} y el peso del queso es ${PqA}`);
}else{
    console.log(`El 20% del peso actual del ratón es menor que el peso del queso`);
}