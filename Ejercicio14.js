const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];

let newArray = [];
let valorAnterior = undefined;
function repeatCounter(list) {
    list.sort();
    list.forEach(element => {
        if (element == valorAnterior) {
            newArray.pop();
            let repeat = list.filter((element) => element == valorAnterior);
            newArray.push(element +": "+ repeat.length);
        } else {
            newArray.push(element+": 1");
            valorAnterior = element;
        }
    });
    return newArray;
}

let resultado = repeatCounter(words);
console.log(resultado);
