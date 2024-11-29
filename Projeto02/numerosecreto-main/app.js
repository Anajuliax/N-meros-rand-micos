function adivinhaNumero() {
   
    let numeroInicial = parseInt(prompt("Digite o número inicial:"));
    let numeroFinal = parseInt(prompt("Digite o número final:"));

    let numeroSecreto = Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;
    let tentativas = 0;
    let acertou = false;

    while (!acertou) {
    let palpite = parseInt(prompt(`Digite um número entre ${numeroInicial} "e" ${numeroFinal}:`));
        tentativas++;

        if (palpite === numeroSecreto) {
            acertou = true;
            alert(`Parabéns! Você acertou o número ${numeroSecreto} "em" ${tentativas} tentativas.`);
        } else if (palpite < numeroSecreto) {
            alert("O número é maior. Tente novamente.");
        } else {
            alert("O número é menor. Tente novamente.");
        }
    }
}

adivinhaNumero();