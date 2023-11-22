//exemplo 1 (function com 1 parametro)
const soma = (num1, num2) => num1 + num2;
console.log(soma(4,5));

// exemplo 2 (function com corpo)
const greeting = (name) => {
    if(name){
        return "ola " + name + "!"
    }
    else{
       return "ola"
    }
}
console.log(greeting("matheus"));
console.log(greeting(""));

// exemplo 3 (function sem argumento)
const testearrow = () => console.log("testei sem argumento");
testearrow ();


// exemplo 4 Usar expressões de função (funções anônimas)
const valor = 'B';
const funcaoA = () => {
  console.log('Você escolheu A');
};

const funcaoB = () => {
  console.log('Você escolheu B');
};

switch (valor) {
  case 'A':
    funcaoA();
    break;
  case 'B':
    funcaoB();
    break;
  default:
    console.log('Opção não reconhecida');
}