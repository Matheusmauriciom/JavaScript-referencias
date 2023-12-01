const pessoas = [
    {nome: 'Luiz', idade: 32},
    {nome: 'Maria', idade: 22},
    {nome: 'Monica', idade: 52},
    {nome: 'David', idade: 12},
    {nome: 'Jorge', idade: 2},
    {nome: 'Sebastiana', idade: 32},
]

// Esta função retorna a propriedade nome de cada objeto
const nomes = pessoas.map(obj => obj.nome);



// Cria uma cópia dos objetos em pessoas antes de adicionar a propriedade 'id'
const comIds = pessoas.map((obj, indice) => {
    const newObj = { ...obj }; // Cria uma cópia do objeto original
    newObj.id = indice; // Atribui um novo valor à propriedade 'id'
    return newObj;      // Retorna o objeto modificado
})

console.log(remover)
console.log(comIds);
console.log(pessoas) // O array pessoas original permanece inalterado
console.log(nomes)
