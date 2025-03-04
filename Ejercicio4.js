//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
//4.1 - Saca a "Tendo" por consola atacando su posición.
console.log(aldeanos[3]);
//4.2 - Coloca en el último lugar de este array a "Cervasio".
aldeanos.push("Cervasio");
//4.3 - Cambia el primer elemento de este array por "Bambina".
aldeanos[0] = "Bambina";
//4.4 - Dale la vuelta a este array.
aldeanos.reverse();
//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
aldeanos.splice("Fibrilio", "Canela", "Vacarena", "Tendo", "Nendo");
//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
/*
No se si te referias a usar un método especificamente, pero esto es lo que he pensado.
En caso de no estar bien comentamelo y le doy una vuelta para sacarlo con un método que estaré encantado de hacer :)
*/
console.log(aldeanos[aldeanos.length - 1]);
// Pista: puedes usar el método length con algo más para ello.