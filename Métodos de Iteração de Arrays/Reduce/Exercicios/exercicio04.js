// 4 -Encontre o valor máximo e minimo em um array:
const numro = [1, 4, 8, 2, 3, 8, 20, 22];

const maior = numro.reduce((elem, valor) => {
    return Math.max(elem, valor);
}, 0);

console.log(maior);

// minimo

const menor = numro.reduce((elem, valor) => {
    return Math.min(elem, valor);
});

console.log(menor);