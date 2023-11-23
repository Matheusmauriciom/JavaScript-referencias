//// Criar um algoritmo que lê um número e verifica se ele é negativo. Se for negativo, imprimir na tela a mensagem "Numero negativo".


const exercicio =(numero) => {
    return numero < 0 ? "Número negativo" : "Número positivo";
    
}
console.log(exercicio(5));
console.log(exercicio(-5));



