// Soma de Números:
// Dado um array de números, use o método reduce() para calcular a soma de todos os números no array.

const numbers = [1,2,3,4,5];
const sum = numbers.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(sum)

