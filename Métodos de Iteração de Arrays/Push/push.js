// O método push() é usado em diversas situações em JavaScript sempre que você precisa adicionar elementos a um array. 

// Adicionar elementos a um array:
const minhaArray = [1, 2, 3];
minhaArray.push(4); // Adiciona o número 4 ao final da array
console.log(minhaArray)

// Acumular resultados de um loop: O push()
const numeros = [];
for(let i = 0; i <= 10; i++){
    numeros.push(i)
}
const quadrado = numeros.map(numero =>numero * numero);
console.log(quadrado)


// Adicionar elementos de um array a outro
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
array1.push(...array2); // Adiciona os elementos de array2 a array1
console.log(array1)




