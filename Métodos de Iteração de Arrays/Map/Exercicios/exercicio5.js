// 5 Dado um array de strings, crie um novo array com as strings que começam com a letra "A".
//5 Given an array of strings, create a new array with the strings that start with the letter "A"

const nomes = [
    "Maria",
    "João",
    "José",
    "Ana",
    "Pedro",
    "Luiza",
    "Fernanda",
    "Lucas",
    "Isabella",
    "Miguel",
    "Alena",
    "Guilherme",
    "Rafael",
    "Gabriela",
  ];

  const nomesA = nomes.map(f => f.startsWith("A"));
  console.log(nomesA)