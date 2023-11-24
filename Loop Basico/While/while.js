/*
while: O loop while é uma estrutura de repetição genérica que continua a executar um bloco de código enquanto uma condição especificada for verdadeira.

 */
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

console.log("--------: arrow")
const countdown = (count) => {
  while (count > 0) {
    console.log(count);
    count--;
  }
  console.log("Fim da contagem.");
};

countdown(5);
/* Saída:
5
4
3
2
1
Fim da contagem.
*/
