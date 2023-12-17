/* Valores Primitivos:
    Os valores primitivos são imutáveis, o que significa que, quando são atribuídos a uma variável ou passados como argumentos para funções, eles são copiados por valor.
    Os tipos de valores primitivos em JavaScript são: undefined, null, boolean, number e string.
*/

/* Valores por Referência:
    Os valores por referência são objetos e são armazenados e acessados por meio de referência.
    Quando uma variável é atribuída a um objeto (ou array, função, etc.), ela não armazena diretamente o objeto em si, mas uma referência (ou endereço de memória) para o objeto.
    Quando você atribui uma variável a outra variável que contém um valor por referência, ambas as variáveis apontam para o mesmo objeto na memória.
    Quando você passa um valor por referência como argumento para uma função, a função recebe uma cópia da referência, não uma cópia do objeto em si.
*/

/* A diferença fundamental é que os valores primitivos são copiados por valor, enquanto os valores por referência são copiados por referência. 
    Isso significa que, ao modificar uma variável que armazena um valor primitivo, não afeta outras variáveis com o mesmo valor. 
    Por outro lado, quando você modifica um objeto (valor por referência), as alterações são refletidas em todas as variáveis que se referem a esse objeto.*/


//primitivos
let x = 5;
let y = x;   // modifiquei
y = 10;


console.log(x); // Output: 5
console.log(y); // Output: 10


//referencia

let array1 = [1, 2, 3];
let array2 = array1;
array2.push(4);

console.log(array1); // Output: [1, 2, 3, 4]  ambos foram modificados
console.log(array2); // Output: [1, 2, 3, 4]

//ref

function alteraArray(a){
    a.push("adicionado")
}
let arr =["a"]
console.log(arr)
alteraArray(arr)
console.log(arr)

// primitivos

function alteraPrimitivo(p){
    p+= "adicionado"
    console.log(" dentro da funcao: ", p)
}
let msg ="mensagem"
console.log(msg)
alteraPrimitivo(msg)
console.log(msg)

/* a principal diferença entre referência e primitivos é que os valores por referência (objetos, arrays, etc.) são modificados tanto no escopo local quanto no escopo global, enquanto os valores primitivos (como strings, números, booleanos) são imutáveis e não são modificados fora do escopo local da função.*/