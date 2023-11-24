/*
Ela permite repetir um bloco de código um determinado número de vezes, até que uma condição seja satisfeita.
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
  }


///////////////arrow//////////
//for
const printNumbers = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
};
console.log("For arrow:")
printNumbers(5); 