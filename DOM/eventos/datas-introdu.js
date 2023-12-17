/* MANIPULAR DATAS EM JS */

// Comando base para pegar a data atual
let data = new Date();
// console.log(data);

// Pegar a data no formato dia/mês/ano - BR
let dataBR = data.toLocaleString("pt-BR"); // let dataBR = data.toLocaleString('pt-BR', {timeStyle: "short"});
console.log(dataBR);

// Pegar o ano atual com 4 dígitos
let ano = data.getFullYear();
console.log(ano);

// Pegar o mês atual - 0(Jan) a 11(Dez)
let mes = data.getMonth();
console.log(mes);

// Mostrar o mês no formato escrito
const mesesDoAno = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

// Pegar o dia do mês - 1 a 31
let diaMes = data.getDate();
console.log(diaMes);

// Pegar o dia da semana - 0 a 6
let diaSemana = data.getDay();

const diasDaSemana = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
];
let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrito);

// Pegar a hora - de 0 a 23
let hora = data.getHours();
console.log(hora);

// Pegar os minutos
let min = data.getMinutes();
console.log(min);

// Pegar os segundos
let segundos = data.getSeconds();
console.log(segundos);

// Comparar datas - maior ou menor. Exemplo: vencimentos
const hoje = new Date();
const vencimento = new Date(2023, 5, 27); // Ajuste o valor do mês para 5, representando junho

if (hoje >= vencimento) {
  console.log("Sua conta está vencida!");
} else {
  console.log("Ainda não venceu, tudo certo.");
}

// Diferença entre duas datas em dias
var dataInicial = new Date();
var dataFinal = new Date(2023, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias + " dias");
