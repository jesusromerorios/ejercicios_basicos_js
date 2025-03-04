const numbers = [12, 21, 38, 5, 45, 37, 6];
let suma = 0;
let promedio;
function average(numberList) {
    numberList.forEach(element => {
        suma = suma + element;
    });
    promedio = suma / numbers.length;
    return promedio;
}

let resultPromedio = average(numbers);
console.log(resultPromedio);