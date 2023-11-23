// Escolha simples: Quando você precisa tomar uma decisão simples com base em uma única condição. 
//Por exemplo, atribuir um valor a uma variável com base na idade:
const verificarIdade = (idade) => {
    return idade >= 60 ? "Idoso" : idade >= 18 ? "Maior de idade" : "Menor de idade";
  };
  
  console.log(verificarIdade(70)); // Deve imprimir "Idoso"
  console.log(verificarIdade(30)); // Deve imprimir "Maior de idade"
  console.log(verificarIdade(12)); // Deve imprimir "Menor de idade"

// Retornar valores condicionais: Em expressões que retornam valores condicionais com base em uma única condição. Por exemplo, atribuir um valor com base na presença de um usuário:
let estaLogado = true;
let mensagem = estaLogado ? "Bem-vindo!" : "Faça login para continuar.";
console.log(mensagem);



//////// condição ? expressão_se_verdadeiro : expressão_se_falso ///////

/* O Operador ? é usado para criar uma condição. 

A expressão antes do ? é avaliada e, se for verdadeira, a primeira expressão após o ? é executada. 

Se for falsa, a segunda expressão após o : é executada.

*/

/////////arrow////////
console.log("----------arrow:")
const idade = 16;
const statusx = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(statusx);

