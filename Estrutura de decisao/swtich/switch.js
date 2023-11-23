//switch: A estrutura switch é usada quando você tem várias condições para avaliar e escolher diferentes caminhos com base em uma expressão.

/*
switch é usado para tomar decisões com base no valor de uma expressão.

case valor1: define um caso específico para um valor.

break; é usado para sair do switch após a execução de um caso.

default: é opcional e é executado se nenhum caso corresponder à expressão. 
/* 

/*
Comparação com múltiplos valores: 
Quando você tem uma única expressão ou variável cujo valor precisa ser comparado com várias opções diferentes. 
Por exemplo, determinar o dia da semana com base em um número:
 */

const dia = 3;
let nomeDoDia;

switch (dia) {
  case 1:
    nomeDoDia = "Segunda-feira";
    break;
  case 2:
    nomeDoDia = "Terça-feira";
    break;
  // ... outros casos ...
  default:
    nomeDoDia = "Dia não reconhecido";
}
console.log(nomeDoDia);


//////////////arrow///////
console.log("-----------"+ "\n")
const getDayOfWeek = (day) => {
  switch (day) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    default:
      return "Dia não encontrado";
  }
};

console.log(getDayOfWeek(1)); // Saída: Segunda-feira





