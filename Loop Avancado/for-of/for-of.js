/*for...of: O loop for...of 

é usado para iterar sobre elementos de objetos iteráveis, como arrays, strings, conjuntos, entre outros. 
Ele é especialmente útil quando você precisa acessar cada elemento de uma coleção de maneira sequencial.

 */

// String:
const minhaString = "Olá, mundo!";
for (const caractere of minhaString) {
  console.log(caractere);
}

// Conjunto (Set):
const meuConjunto = new Set([1, 2, 3, 4, 5]);
for (const elemento of meuConjunto) {
  console.log(elemento);
}
// Isso imprimirá cada elemento do conjunto em uma linha separada.

// Mapa (Map):
const meuMapa = new Map([
  ['chave1', 'valor1'],
  ['chave2', 'valor2'],
  ['chave3', 'valor3']
]);

for (const [chave, valor] of meuMapa) {
  console.log(`${chave}: ${valor}`);
}
// Isso imprimirá cada par chave-valor do mapa em uma linha separada.

