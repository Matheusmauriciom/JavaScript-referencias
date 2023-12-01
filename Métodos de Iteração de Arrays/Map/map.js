// map percorre os elementos
// quando utilizo o map estou querendo modificar os dados do array

//exemplo 1 > Mapeando objetos para extrair propriedades específicas:
const products = [
    {name: 'Camisa', price: 10.00, category: 'roupas'},  
    {name: 'Fogao', price: 100.00, category: 'eletro'},  
    {name: 'Geladeira', price: 200.00, category: 'eletro'},  
    {name: 'Shorts', price: 20.00, category: 'roupas'},  
]


/* Mapeando objetos para extrair propriedades específicas: */ 
const nomes = products.map((pessoa) => pessoa.name);
console.log(nomes);

products.map((product)=>{
    if(product.category === 'roupas'){
        product.promocao = true
    }
})
console.log(products)


// exemplo 2 > Duplicando cada elemento de uma matriz:
const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map((d) => d * 2);
console.log(duplicados); // Saída: [2, 4, 6, 8, 10]



//exemplo 3 > Convertendo uma matriz de strings para maiúsculas:
const frutas = ['maçã', 'banana', 'laranja'];
const frutasMaisculas = frutas.map((f) => f.toUpperCase());
console.log(frutasMaisculas)


//exemplo 4 > 

const produtos = [
    { nome: 'Maçã', preco: 2.0 },
    { nome: 'Banana', preco: 1.0 },
    { nome: 'Laranja', preco: 1.5 },
  ];
  
  const produtosComDesconto = produtos.map((produto) => ({
    ...produto,
    preco: produto.preco * 0.9, // Aplicar um desconto de 10%
  }));
  
  console.log(produtosComDesconto);
  
