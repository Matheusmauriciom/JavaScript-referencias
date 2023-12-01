// Multiplicação de Números:
// Receba um array de números e utilize o reduce() para calcular o produto de todos os números no array.

const number = [2,3,4,5];

const multi = number.reduce((acumulador, total)=>{
    return acumulador * total
},1)
console.log(multi)