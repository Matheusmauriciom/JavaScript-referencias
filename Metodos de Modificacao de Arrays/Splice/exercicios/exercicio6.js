//6 Cópia de Elementos:
// Dado um array de strings, use o método splice() para copiar um subconjunto de elementos em um novo array.


const arrayStr = ["amor", "paz", "alegria", "felicidade", "esperança", "saúde", "amizade", "família", "conhecimento", "liberdade"];
console.log(arrayStr)

//Copia os elementos do array de 1 até 6 em um novo array
const newStr = arrayStr.splice(1,6)
console.log(newStr)
