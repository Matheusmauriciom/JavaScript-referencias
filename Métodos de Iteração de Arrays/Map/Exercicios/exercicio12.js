// 13 Conversão de Moeda: Dado um array de valores em dólares, use o map() para convertê-los para outra moeda, aplicando uma taxa de câmbio.
// 13 Currency Conversion: Given an array of dollar values, use map() to convert them to another currency, applying an exchange rate.

const palavrasAleatorias = [
    "Abacaxi",
    "Bicicleta",
    "Cachorro",
    "Dinossauro",
    "Elefante",
    "Foguete",
    "Girassol",
    "Hipopótamo",
    "Igreja",
    "Jardim"
  ];
  
const resultado = palavrasAleatorias.map((palavra) => {
    return {
        palavra: palavra,
        letras: palavra.length
    };
});

console.log(resultado);
