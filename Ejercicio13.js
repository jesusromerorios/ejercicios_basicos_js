const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function nameFinder(nameList, theName) {
    if (nameList.includes(theName)) {
        return "Tu nombre aparece en la lista, el resultado es: "+ nameList.includes(theName);
    } else {
        return "Tu nombre no aparece en la lista, el resultado es: "+ nameList.includes(theName);
    }
}

let myName = "Logan";
let buscarEn = nameFinder(names, myName);
console.log(buscarEn);