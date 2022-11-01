function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
    }

    if (numeroForMaiorOuMenorQueOValorPermitdo(numero)) {
        elementoChute.innerHTML += `<div>Valor invalido: fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${numero}</span>
        <div id="dica">O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${numero}</span>
        <div id="dica">O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitdo(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogarNovamente') {
        window.location.reload()
    }
})