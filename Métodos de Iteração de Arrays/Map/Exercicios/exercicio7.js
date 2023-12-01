// 7 Conversão de Temperaturas:
// Receba um array de temperaturas em graus Celsius e use o map() para convertê-las em Fahrenheit.
// A fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32.

// 7 Temperature Conversion:
// Receive an array of temperatures in degrees Celsius and use map() to convert them to Fahrenheit.
// The conversion formula is: Fahrenheit = (Celsius * 9/5) + 32.

const temperaturasCelsius = [20, 25, 30, 18, 22, 28, 15];
const fahrenheit = temperaturasCelsius.map(
  (temperatura) => (temperatura * 9) / 5 + 32
);
console.log(fahrenheit);


