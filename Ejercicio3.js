let multi = 10 * 5;
let divi = 10 / 2;
let resto = 15 % 9;
//Operdores de asignación
//Dadas las siguientes variables:
let p = 10;
let j = 5;
//Encuentra el operador de asignación para que el resultado sea 15
let o = p += j;
// Dadas las siguientes variables:
let c = 10;
let m = 5;
//Encuentra el operador de asignación para que el resultado sea 50
let i = c *= m;

console.log(`El resultado de multiplicar 10 por 5 es: ${multi}`);
console.log(`El resultado de dividir 10 entre 2 es: ${divi}`);
console.log(`El resto de la división de 15 entre 9 es: ${resto}`);
console.log(`El resultado de sumar ${p} y ${j} es: ${o}`);
console.log(`El resultado de multiplicar ${c} y ${m} es: ${i}`);