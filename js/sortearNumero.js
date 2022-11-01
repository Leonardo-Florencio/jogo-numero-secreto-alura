const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random()*maiorValor + 1);
}

console.log(`O número secreto é: ${numeroSecreto}`);

let elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor = menorValor;

let elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor = maiorValor;