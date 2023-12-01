// 2 Dado um array de strings, crie um novo array com as strings em maiúsculas.
// 2 Given an array of strings, create a new array with the strings in uppercase.

const arrayString = ["a" , "c", "e", "matheus", "mauricio", "futebol"];

const arrayMaiscula = arrayString.map(str => str.toUpperCase());
console.log(arrayMaiscula)