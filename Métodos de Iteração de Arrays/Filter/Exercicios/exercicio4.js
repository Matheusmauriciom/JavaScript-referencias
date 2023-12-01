// 4 - Crie uma função que retorne um array contendo apenas objetos de nomes com 7 letras ou mais."
// 4 - Create a function that returns an array containing only object names with 7 letters or more."

const strExercise4 = [
    { name: "Alice", age: 28 },
    { name: "Ilana", age: 32 },
    { name: "Gabriela", age:22 },
    { name: "Amanda", age: 29 },
    { name: "Karolina", age: 12 },
    { name: "Bob", age: 32 },
    { name: "Thiago", age: 32 },
  ];

  const exercise4 = strExercise4.filter((element)=>{
    return element.name.length >=7;
  })

  console.log(exercise4)