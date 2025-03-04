const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
let suma = 0;
let promedio;
function averageWord(list) {
    list.forEach(element => {
        if (typeof element == "string") {
            let strLength = element.length;
            suma = suma + strLength;
        } else {
            suma = suma + element;
        }
    });
    promedio = suma / list.length;
    return promedio;
}

let resultPromedio = averageWord(mixedElements);
console.log(resultPromedio);