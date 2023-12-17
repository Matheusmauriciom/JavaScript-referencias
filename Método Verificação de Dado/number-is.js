// Verifica se o valor é um número inteiro
const isInteger = Number.isInteger(123);
console.log("123 é um número inteiro: ", isInteger); // true
console.log("'123' é um número inteiro: ", Number.isInteger("123")); // false

// Verifica se o valor é um número finito
const isFinite = Number.isFinite(123.456);
console.log("123.456 é um número finito: ", isFinite); // true
console.log("Infinity é um número finito: ", Number.isFinite(Infinity)); // false

// Verifica se o valor é um número não-definido
const isNaN = Number.isNaN(NaN);
console.log("NaN é um número não-definido: ", isNaN); // true
console.log("123 é um número não-definido: ", Number.isNaN(123)); // false

//
const isNumber = (value) =>{
    return typeof value === 'number' && !Number.isNaN(value)
}

console.log(isNumber("a"))

//
const value = prompt("Digite um número: ");

if (Number.isInteger(value)) {
  return value * 2;
} else {
  return "O valor não é um número inteiro."
}
