/* EVENTOS
Eventos são ações disparadas pela interação dos usuários ná página.
é o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Mais utilizados:

onclick -> Dispara quando recebe um click.
ondblclick -> Disparado quando clique duplo.

onmouseover -> Dispaado quando o mouse está sobre.
onmouseout -> Dispardo qando o mouse é movido para fora do elemento.
onmousemove -> Disprado com o mouse é movido no elemento.
onmousedown -> Disprado quand o o clique do botão foi pressionado.
onmouseup -> Disparado quando o clique do botão é liberado.

onfocus -> Disprado quando o elemento recebe o foco. Válido para input
onchange -> Disprado quando existe uma mudança no conteudo. "Ao mudar".
onblur -> Disprado quando o elemento perde o foco.
onkeydown -> Disprado quando uma tecla é pressionada
onkeyopress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.

onload ->Dispaado quando a página terminou de ser carregada. Body (controle da página, o que carregar primeiro,segundo.. )
onresize -> Disparado quando há um redimencionamento da janela. (controlar tamanho de tela)
*/

function eventoClick() {
    alert("Acionou um evento de clique");
}

function eventoDblClick() {
    alert("Clique duplo");
}

function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.background = "red";
}

function viraAzul() {
    let div = document.getElementById("teste");
    div.style.background = "blue";
}

function adicionaTexto() {
    let p = document.getElementById("texto");
    p.innerHTML = "O mouse moveu";
}

function limpaTexto() {
    document.getElementById("campoTexto").value = "";
}

function mudou() {
    console.log("mudou");
}
