// Destructuring de um array
const numbers = [1, 2, 3];

// Atribui os valores do array às variáveis `first`, `second` e `third`
const [first, second, third] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3



////////////////////
//Ignorar Elementos:
const numeros = [1, 2, 3, 4, 5];
const [primeiro, , terceiro] = numeros;

console.log(primeiro); // Saída: 1
console.log(terceiro); // Saída: 3


////////////////
//Rest (Agrupamento):
const numerosRest = [1, 2, 3, 4, 5];
const [primeiroRest, ...resto] = numerosRest;

console.log("Saida rest:" + primeiroRest); // Saída: 1
console.log(resto);    // Saída: [2, 3, 4, 5]
