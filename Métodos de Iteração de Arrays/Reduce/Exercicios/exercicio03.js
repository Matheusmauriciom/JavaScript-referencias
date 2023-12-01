//Concatenação de Strings:
//Dado um array de strings, use o método reduce() para concatenar todas as strings em uma única string.

const str = strings.reduce((acumulador, valor, indice, array) => {
    if (indice === array.length - 1) {
      // Se for o último índice, não adicionamos um espaço
      return acumulador + valor;
    } else {
      // Caso contrário, adicionamos um espaço após a string
      return acumulador + valor + " ";
    }
  }, "");
  
  console.log(str);