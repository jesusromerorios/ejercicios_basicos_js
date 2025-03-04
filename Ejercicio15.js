//Bucle que recorra todas las posiciones.
//Que solo muestre los valores que cumplan la condición.

const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta'];

for (let i = 0; i < products.length; i++) {
    if (products[i].includes('Camiseta') == true) {
        console.log(products[i]+" contiene la palabra Camiseta");
    }
}

