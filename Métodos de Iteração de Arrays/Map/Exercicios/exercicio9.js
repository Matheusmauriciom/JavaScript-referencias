//9 Converta um array de strings para um array de objetos com o número de caracteres de cada string como valor.
//9 Convert an array of strings to an array of objects with the number of characters in each string as the value.

const arrayDeStrings = ["string1", "string22", "string333", "string4444", "string55555"];

const newArray = arrayDeStrings.map((elemento, indice)=>{
    return {
    string: elemento,
    length: elemento.length,
    id: indice,
    };
})
console.log(newArray)

