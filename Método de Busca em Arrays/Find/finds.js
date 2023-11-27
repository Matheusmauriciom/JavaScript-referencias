const numeros = [1, 2, 3, 4, 5];
const elementoEncontrado = numeros.find((elemento) => elemento === 3);
console.log(elementoEncontrado); // Saída: 3

const valores = [10, 20, 30, 40, 50];
const elementoNoIndice = valores.find((elemento, indice) => indice === 2);
console.log(elementoNoIndice); // Saída: 30

const dados = [100, 200, 300, 400, 500];
const elementoNoArray = dados.find((elemento, indice, array) => array.length > 4);
console.log(elementoNoArray); // Saída: 100

const numeros1 = [1, 2, 3, 4, 5];
const valorAlvo = 2;
const elementoEncontrado1 = numeros.find(function(elemento) {
  return elemento === this.valorAlvo;
}, { valorAlvo });
console.log(elementoEncontrado1); // Saída: 2
