// classes ao fundamental para orientacao a objeto
// constructor, propriedades, métodos

// Definindo uma classe usando a sintaxe ES6
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
// Criando um objeto (instância da classe) com base na classe Pessoa
const pessoa1 = new Pessoa("João", 30);

// Agora, pessoa1 é um objeto que segue a estrutura e os comportamentos definidos na classe Pessoa


pessoa1.apresentar();