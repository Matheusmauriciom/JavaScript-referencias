/* 
for...in: O loop for...in > lê os indices[array]. ou chaves[objeto]
é usado para iterar sobre as propriedades enumeráveis de um objeto. 
É comumente usado para iterar sobre as chaves (nomes das propriedades) de um objeto.

*/

const person = {
    name: 'João',
    age: 30,
    city: 'São Paulo'
  };
  
  for (const key in person) {
    console.log(key, person[key]);
  }
  

  //////////arrow///////
  console.log("------" + "\n")
    const person1 = {
      name: "João",
      age: 30,
      city: "São Paulo",
    };
    
    const printProperties = () => {
      for (const key in person1) {
        console.log(key + ": " + person1[key]);
      }
    };
    printProperties();
  