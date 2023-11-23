// Criar um algoritmo que leia dois números L e R. 
// O programa deve verificar a maior área entre um quadrado de lado L e um círculo de raio R. Imprimir na tela qual o maior: "Quadrado" ou "Circulo".

const sideSquare = (l) =>{
  const areaSquare = l ** 2;
  return areaSquare;
}

const areaCircle = (r) => {
  const areaCircle = Math.PI * Math.pow(r, 2); 
  return areaCircle;
}

const L = 53;
const R = 5;

const areaDoQuadrado = sideSquare(L);
const areaDoCirculo = areaCircle(R)

if (areaDoQuadrado > areaDoCirculo) {
  console.log("Quadrado");
} else if (areaDoCirculo > areaDoQuadrado) {
  console.log("Círculo");
} else {
  console.log("As áreas são iguais");
}