// 4 Remoção de Múltiplos Elementos:
// Dado um array de números, use o método splice() para remover vários elementos consecutivos do array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersRemoved = numbers.splice(0,2);
console.log(numbersRemoved)
console.log(numbers)