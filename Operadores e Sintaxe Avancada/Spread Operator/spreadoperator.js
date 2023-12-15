const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayMesclado = [...array1, ...array2];

console.log(arrayMesclado); 

//

const carName = {name: 'gol'}
const cardBrand = {brand: 'VW'}
const otherInfos = {km:1000, price: 5000}

const car = {...carName, ...cardBrand, ...otherInfos, wheels: 4};
console.log(car)

//

const somar = (a,b,c) => a+b+c;
  
  const numeros = [1, 2, 3];
  const resultado = somar(...numeros);
  
  console.log(resultado); 
  