//3 Dado um array de objetos, crie um novo array com os valores de um determinado atributo de cada objeto.

const objects = [{ name: "John Doe", age: 30 }, { name: "Jane Doe", age: 25 }];

// const atributoObjects = objects.map(obj => obj.name)
const atributoObjects = objects.map((objects)=>{
    return objects.name
})

console.log(atributoObjects)