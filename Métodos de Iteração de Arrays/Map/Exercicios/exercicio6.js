// 6 Cálculo de Idades: Tenha um array de objetos com informações sobre pessoas, incluindo o ano de nascimento. 
//Utilize o map() para calcular as idades das pessoas e criar um novo array com as idades. 
//Adicione uma chave id em cada objeto.

// 6 Age Calculation: Have an array of objects with information about people, including their year of birth.
//Use map() to calculate people's ages and create a new array with the ages.
//Add an id key to each object.

const people = [
  {
    nome: "João",
    anoNascimento: 1990,
  },
  {
    nome: "Maria",
    anoNascimento: 1985,
  },
  {
    nome: "Pedro",
    anoNascimento: 2000,
  },
  {
    nome: "Ana",
    anoNascimento: 1992,
  },
  {
    nome: "Lucas",
    anoNascimento: 1980,
  },
  {
    nome: "Isabel",
    anoNascimento: 1995,
  },
  {
    nome: "Miguel",
    anoNascimento: 1987,
  },
  {
    nome: "Carolina",
    anoNascimento: 2005,
  },
  {
    nome: "Rafael",
    anoNascimento: 1998,
  },
  {
    nome: "Sofia",
    anoNascimento: 1989,
  },
];


const ages = people.map((people)=>{
  const age =  new Date().getFullYear() - people.anoNascimento
  return age;
});

console.log(ages)

//adicione uma chave id em cada objeto



const addId = people.map((a, indice)=>{
  a.id = indice;
  return a
})
console.log(addId)

// const firstPerson = people.map((person, indice) => {
//     if (indice === 0) {
//       return person;
//     }
//   });
//   console.log(firstPerson)
