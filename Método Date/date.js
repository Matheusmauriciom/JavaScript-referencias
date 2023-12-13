// Cria um objeto Date com a data e a hora atuais
const now = new Date();

// Obtém o dia da semana atual
const dayOfWeek = now.getDay();
console.log(dayOfWeek); // 5 (Friday)


// Obtém o mês atual
const month = now.getMonth() + 1;
console.log(month); // 9 (September)

// Obtém o ano atual
const year = now.getFullYear();
console.log(year); // 2023

// Obtém a hora atual
const hour = now.getHours();
console.log(hour); // 10

// Obtém os minutos atuais
const minutes = now.getMinutes();
console.log(minutes); // 36

// Obtém os segundos atuais
const seconds = now.getSeconds();
console.log(seconds); // 54

// Obtém os milissegundos atuais
const milliseconds = now.getMilliseconds();
console.log(milliseconds); // 999
