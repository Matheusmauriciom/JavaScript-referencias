//4 Dado um array de números, crie um novo array com os números pares.
//4 Given an array of numbers, create a new array with the even numbers

const numeros = [2,3,5,10,22,4,13,15,73,28,33,99,100];

const numerosPares = numeros.map( par => par % 2 === 0)
console.log(numerosPares)
    
