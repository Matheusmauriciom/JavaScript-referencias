// 3 -Dado a array de números, faça a filtragem de números impares.
// 3- Given an array of numbers, filter out odd numbers.

const numbersExercise3 = [1,2,3,4,5,6,7,8,9,10];

const exercise3 = numbersExercise3.filter(number => number % 2 !== 0);    /* != (false) */  
console.log(exercise3);

