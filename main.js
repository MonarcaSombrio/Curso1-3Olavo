const botoes = document.querySelectorAll(".botao");
const textos = querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date ("2024-10-05T00:00:00");
const tempoObjetivo2 = new Date ("2024-12-05T00:00:00");
const tempoObjetivo3 = new Date ("2024-12-30T00:00:00");
const tempoObjetivo4 = new Date ("2024-12-01T00:00:00");

const tempos = [tempoObjetivo1, empoObjetivo2, empoObjetivo3, empoObjetivo4];