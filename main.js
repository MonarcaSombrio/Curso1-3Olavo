const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; 1 < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }

}

const contadores = document.querySelectorAll(".contador");

const tempoObjetivo1 = new date("2024-10-05T00:00:00");

contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo1) {

    let tempoAtual = new date();
    let tempoFinal = tempoObjetivo1 - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(tempoFinal / 60);
    let horas = Math.floor(tempoFinal / 60);
    let dias = Math.floor(tempoFinal / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return (dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos");
    //print(dias);
}
