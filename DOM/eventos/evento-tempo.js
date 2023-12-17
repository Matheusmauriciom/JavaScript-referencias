/* EVENTOS DE TEMPO COM JAVASCRIPT 

Os eventos de tempo permitem a execução do código em intervalos de tempo especificados.
Esses intervalos de tempo são chamados de ventos de cronometragem. Os dois métados-chave são: 

setInterval(function(){ o que é para fazer}, milisegundos 5000);


*/

// Interval Repete a execução da função continuamente
// A função abaixo ativa uma contagem que incrementa o valor exibido em um elemento HTML a cada segundo (1seg)
 function ativarContagem(){

 tempo = setInterval(function(){
    var cronometro = document.getElementById('tempo').innerHTML;
    var soma = parseInt(cronometro) +1;
    document.getElementById("tempo").innerHTML = soma;
}, 1000)
}

// A função abaixo para a contagem, cancelando o intervalo definido anteriormente
function pararContagem() {
    clearInterval(tempo);
  }


//Timeout -> Executa uma função, depois de esperar um número especificado de milisegundos.

var corOriginal;
corOriginal = document.body.style.backgroundColor;

function ativarContagem1(){
        document.getElementById("tempo1").innerHTML = "Vai mudar de cor em 5seg!";

        // ativa a função apenas 1 vez quando der o tempo especificado
       tempo = setTimeout(function(){ 
            document.body.style.backgroundColor="white";
        }, 5000);
    }

 //// A função abaixo interrompe a mudança de cor, cancelando o timeout definido anteriormente,
// e restaura a cor original de fundo do corpo do documento
    function pararContagem1(){
        clearTimeout(tempo);
        document.body.style.backgroundColor = corOriginal;
        document.getElementById("tempo1").innerHTML = "Contagem interrompida. Cor restaurada.";}

//
    function exibirMensagem() {
        console.log("A mensagem será exibida após 3 segundos.");
      }
      
      setTimeout(exibirMensagem, 3000);
    