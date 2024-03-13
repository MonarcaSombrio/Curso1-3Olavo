const botoes = document.querySelectorAll(".botao");
const textos = querySelectorAll(".aba-conteudo");

for (let i = 0; i <botoes.length; j++){
    botoes[i].onclick = function () {

for (let i = 0; i <botoes.length; j++){
    botoes[j].classList.remove("ativo");
    textos[j].classList.remove("ativo");
}
botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
}
}