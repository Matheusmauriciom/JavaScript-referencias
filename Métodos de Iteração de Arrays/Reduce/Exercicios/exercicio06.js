// 6 -Pessoa mais velha
// Tenha um array de objetos que contenham informações sobre pessoas, incluindo a idade.
// Use o reduce() para calcular a pessoa mais velha e mais nova.

const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 22 },
    { nome: "Ana", idade: 28 },
    { nome: "Carlos", idade: 35 },
    { nome: "Lúcia", idade: 40 }
  ];

const maisVelha = pessoas.reduce((acumulador, valor)=>{
    if(acumulador.idade > valor.idade) return acumulador
    return valor   
})
console.log(maisVelha)
