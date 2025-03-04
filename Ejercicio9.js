const numbers = [1, 2, 3, 5, 45, 37, 58];
let acumulando = 0;
function sumNumbers(numberList) {
    numberList.forEach (element => {
        acumulando = acumulando + element;
    });
    return acumulando;
}

let resultado = sumNumbers(numbers);
console.log(resultado);