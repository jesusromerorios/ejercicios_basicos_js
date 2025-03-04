const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
let itenBase = avengers[0];
function findLongestWord(stringList) {
    stringList.forEach (element => {
        if (element.length > itenBase.length) {
            itenBase = element;
        }
        })
    return itenBase;    
}

let finalIten = findLongestWord(avengers);
console.log(finalIten);