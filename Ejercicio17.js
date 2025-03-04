const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};
console.log("Mi alien tiene las siguientes propiedades:")
for (const property in alien) {
    console.log(`La propiedad ${property} tiene como valor: ${alien[property]}.`);
}