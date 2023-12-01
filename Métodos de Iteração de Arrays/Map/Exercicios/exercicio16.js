// 16 Converta um array de strings para um array de números inteiro e float.
// 16 Convert an array of strings to an array of integer and float numbers.

const array = ["1", "2" , "3" , "4" , "5"];
const array2 = ["1.1", "2.2", "3.3", "4.4", "5.5"];

const arrayInt = array.map(str => parseInt(str));
console.log(arrayInt)

const arrayFloat = array2.map(str => parseFloat(str));
console.log(arrayFloat)