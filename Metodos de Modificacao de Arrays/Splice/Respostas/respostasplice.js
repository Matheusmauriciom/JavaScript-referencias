// 1. Adicionar elementos em uma posição específica:
const numeros = [1, 2, 3, 4, 5];
// Adiciona o elemento 10 na posição 2
numeros.splice(2, 0, 10);
console.log(numeros); // Output: [1, 2, 10, 3, 4, 5]


// 2. Remover elementos de uma posição específica:
const numeros2 = [1, 2, 3, 4, 5];
// Remove o elemento na posição 2
numeros2.splice(2, 1);
console.log(numeros2); // Output: [1, 2, 4, 5]


// 3. Substituir elementos em uma posição específica:
const cores = ['vermelho', 'verde', 'azul'];
// Substitui 'verde' por 'amarelo' na posição 1
cores.splice(1, 1, 'amarelo');
console.log(cores); // Output: ['vermelho', 'amarelo', 'azul']


// 4. Copiar um subconjunto de elementos em um novo array:
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'morango'];
// Copia os elementos das posições 1 a 3 em um novo array
const novoArray = frutas.splice(1, 3);
console.log(novoArray); // Output: ['banana', 'laranja', 'uva']


// 5. Realizar várias operações em um único array:
const numeros3 = [1, 2, 3, 4, 5];
// Realiza várias operações em um único array
numeros3.splice(2, 1, 10); // Substitui o elemento na posição 2 por 10
numeros3.splice(4, 0, 20); // Adiciona o elemento 20 na posição 4
console.log(numeros3); // Output: [1, 2, 10, 3, 20, 5]

