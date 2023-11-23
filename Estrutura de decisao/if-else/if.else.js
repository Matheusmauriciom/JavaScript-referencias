
//Lógica complexa: Quando você precisa de uma lógica de decisão complexa envolvendo várias condições e combinações de operadores lógicos.

/*Avaliação de várias condições independentes: 
/Quando você precisa avaliar várias condições independentes e executar código com base em cada uma delas.
Por exemplo, verificar se um número é positivo, negativo ou zero: 
*/

var numero = 5;

if (numero > 0) {
  console.log("O número é positivo");
} else if (numero < 0) {
  console.log("O número é negativo");
} else {
  console.log("O número é zero");
}


////////////////// arrow  //////////////////////                                         
  const checkEvenOdd = (num) => {
    if (num % 2 === 0) {
      return "Par";
    } else {
      return "Ímpar";
    }
  };
  console.log("---------" + "\n")
  console.log(checkEvenOdd(5)); // Saída: Ímpar