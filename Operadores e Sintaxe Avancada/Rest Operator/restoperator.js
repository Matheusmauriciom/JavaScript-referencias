const soma = (...numeros) => numeros.reduce((total, numero) => total + numero, 0);

console.log(soma(1, 2, 3, 4, 5)); // Resultado: 15

const voidArray = [];
const numbers = [1, 2, 3, 4];

voidArray.push(...numbers);
console.log(voidArray);


/////////////////////

const somar = (...args) =>{
    const soma = args.reduce((total, atual)=> total + atual,0);
    const media = soma / args.length
    return media;
}
console.log(somar(10,5,7,3))
