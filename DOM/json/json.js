/*  JSON (Java script object nonation)

 Basicamente uma forma de converter um objeto em texto e texto em um objeto.

 Usado principalmente para transmitir dados entre sistemas de forma simples.

 Dois métodos:
 JSON.parse() -> Converte texto no padrão JSON em objetos
 JSON.stringify() -> Converte objetos em texto padrão JSON


*/

// const carro = {
//     marca: "fiat",
//     modelo: "uno",
//     motor: ["1.6", "1.4", "2.0"]
// }

// CONVERTEU PARA TETO JSON
// let texto = JSON.stringify(carro);

// COLOCOU O TEXTO NO HTML
// document.getElementById('area').innerHTML = texto;

// CONVERSAO DE TEXTO EM OBJETO
// let obj = JSON.parse(texto);

// PEGUEI UM VALOR DESTE OBJETO
// console.log(obj.motor[0])



function buscarCEP(){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

  
    ajax.onload = function(){
    

    // peguei os valores que eu quero
    let obj = JSON.parse(this.responseText);
    let logradouro = obj.logradouro
    let cidade = obj.localidade
    let estado = obj.uf
    document.getElementById("texto").innerHTML = "Logradouro: " + logradouro + "<br> Cidade: " + cidade + "<br> Estado: " + estado;

   
}
}

