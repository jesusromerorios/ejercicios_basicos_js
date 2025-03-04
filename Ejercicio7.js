function greaterNumber(numberOne , numberTwo) {
    if (numberOne < numberTwo) {
        return "El numero mas alto es: "+ numberTwo;
    } else {
        return "El numero mas alto es: "+ numberOne;
    }
  }

let result = greaterNumber(10, 11);
console.log(result);