//Punto 1
const jedi = {nombre: "Luke Skywalker", edad: 19};
jedi.edad = 25;
//Punto 2
const princesa = {nombre: "leia", apellidos: "Organa", edad: 20};
console.log(`Soy ${princesa.nombre} ${princesa.apellidos}, tengo ${princesa.edad} y soy una princesa de Alderaan.`);
//Punto 3
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
let precioSables = sable1.precio + sable2.precio;
console.log(`El precio de los dos sables es de ${precioSables}`);
//Punto 4
let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};
nave1.precioFinal = nave1.precioBase+precioBaseGlobal;
nave2.precioFinal = nave2.precioBase+precioBaseGlobal;
console.log(nave1.precioFinal + "\n" +nave2.precioFinal);
