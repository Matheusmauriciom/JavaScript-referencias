const frutas = ['pera', 'maça', 'uva'];

for (let i in frutas){
    console.log(i)
}

for (let indice in frutas){
    console.log(frutas[indice])
}

const person = {
    name: 'João',
    age: 30,
    city: 'São Paulo'
  };
  
  for (const key in person) {
    console.log(key, person[key]);
  }