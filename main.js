const botoes = document.querySelectorAll(".botao");//variável que armazena todos os itens com a classe botão
const textos = documento.querySelectorAll (".aba-conteudo");//Variavel que armazena todos os itens com a aba-conteudo

for (let i = 0; i < botoes.length; i++) {// loop que executa enquanto i<quantidade de botoes

    botoes[i].onclick = function () {//cria uma função 

        for (let j = 0; j < botoes.length; j++) { // loop que executa enquanto j<quantidade de botoes
            botoes[j].classList.remove("ativo");  //remove a palavra ativo da classe.
        }
        botoes[i].classList.add("ativo");//adiciona a palavra ativo da classe.
        textos[i].classList.add("ativo");//adiciona a palavra ativo da classe.
    }
    console.log();
}