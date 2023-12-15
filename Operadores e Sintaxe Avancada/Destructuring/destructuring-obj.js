// Destructuring de um objeto
const person = {
    namePerson: "John Doe",
    age: 30,
  };
  
  // Atribui os valores do objeto às variáveis `name` e `age`
  const { namePerson, age } = person;
  
  console.log(namePerson); // John Doe
  console.log(age); // 30

//// 
/// Alias Renomear Variáveis
const pessoa = { nome: 'Maria', idade: 25 };
const { nome: nomeDaPessoa, idade: idadeDaPessoa } = pessoa;

console.log(nomeDaPessoa); // Saída: Maria
console.log(idadeDaPessoa); // Saída: 25


//Valores Padrão
// Você pode definir valores padrão para as variáveis caso as propriedades não existam no objeto

const caneta = { cor: 'Azul' };
const {cor, preco = 20} = caneta
console.log(cor)
console.log(preco)