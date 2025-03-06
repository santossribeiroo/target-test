// Questão 1
export default function sumResult() {
    let indice = 13;
    let soma = 0;
    let x = 0;

    while (x < indice) {
        x = x + 1;
        soma = soma + x;
    }

    document.getElementById('sumResult').innerText = soma;
}