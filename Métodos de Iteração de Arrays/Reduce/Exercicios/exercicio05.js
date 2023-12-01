//5 Média de Idades:
// Tenha um array de objetos que contenham informações sobre pessoas, incluindo a idade. 
//Use o reduce() para calcular a média das idades das pessoas no array.

const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 22 },
    { nome: "Ana", idade: 28 },
    { nome: "Carlos", idade: 35 },
    { nome: "Lúcia", idade: 40 }
  ];

  
const media = pessoas.reduce((acumulador, valor)=>{
 return acumulador + valor.idade 
  
},0) / pessoas.length;

console.log(media)



