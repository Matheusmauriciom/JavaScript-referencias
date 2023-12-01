const numeros = [10, 20, 30, 40, 50];

// Vamos usar o método filter para encontrar números maiores que seus índices.
const numerosMaioresQueIndice = numeros.filter((elemento, indice) => {
  return elemento > indice;
});

console.log(numerosMaioresQueIndice); // Saída: [20, 30, 40, 50]




 //2  Filtrar objetos por propriedade:
// Crie uma função que retorne um novo array contendo apenas os objetos que têm uma propriedade específica, como a idade, com um valor correspondente.

const pessoas2 = [
  { nome: "Alice", idade: 28 },
  { nome: "Bob", idade: 32 },
  { nome: "Carol", idade: 22 },
  // ...
];

const pessoasComMaisDe30Anos = pessoas2.filter((pessoas2) => {
  return pessoas2.idade > 30;
});

console.log(pessoasComMaisDe30Anos);

// 3 Retorne as pessoas cujo nome termina com a letra "A"; //endsWith

const pessoas3 = [
  { nome: "Alice", idade: 28 },
  { nome: "Ilana", idade: 32 },
  { nome: "Gabriela", idade:22 },
  { nome: "Amanda", idade: 29 },
  { nome: "Karolina", idade: 12 },
  { nome: "Bob", idade: 32 },
  { nome: "Thiago", idade: 32 },
];

const letraFinal = pessoas3.filter((pessoas3)=>{
  return pessoas3.nome.endsWith('a')
  
})
console.log(letraFinal)

// 4 - Filtrar objetos com propriedades ausentes:
//Crie uma função que retorne um novo array contendo apenas os objetos que têm uma determinada propriedade, como "curso", ausente ou nula.

const estudantes = [
{ nome: "Ana", idade: 20, curso: "Matemática" },
{ nome: "Carlos", idade: 22 },
{ nome: "Maria", curso: "Física" },

];

const estudantesFiltrado = estudantes.filter((estudantes)=>{
   return estudantes.curso === undefined || estudantes.curso === null;
})

console.log(estudantesFiltrado)
