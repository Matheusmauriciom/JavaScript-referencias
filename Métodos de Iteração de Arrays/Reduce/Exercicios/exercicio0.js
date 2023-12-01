// entenda os 4 parametros


const numbers = [1,2,3,4,5];
const sum= numbers.reduce((acc, curr, index, array) => {
    console.log(`Acumulador: ${acc}`);
    console.log(`Valor: ${curr}`);
    console.log(`Índice: ${index}`);
    console.log(`Array: ${array}`);
    return acc + curr;
  });
  
  console.log(sum); // 15