// Criar um algoritmo que lê um número e verifica se ele é negativo. Se for negativo, imprimir na tela a mensagem "Numero negativo".

const exercicio = (numero) => {
    if(typeof numero === "string"){
        return "Entrada inválida"
    }
    else if (numero <0 ) {
        return "Número negativo"
    }
    else{
        return "Numero positivo"
    }
}
console.log(exercicio("4"));
console.log(exercicio(5));
console.log(exercicio(-5));

