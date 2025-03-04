const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];
let variableAnterior = undefined;
let newArray = [];
function removeDuplicates(list) {
    list.sort();
    list.forEach (element => {
        if (element.includes(variableAnterior)) {
            
        } else {
            variableAnterior = element;
            newArray.push(element);
        }
        }
    )
    return newArray;
}

let sortArray = removeDuplicates(duplicates);
console.log(sortArray);