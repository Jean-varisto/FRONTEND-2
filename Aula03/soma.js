function capturaPrimeiroValor() {
    let valor01 = parseInt(prompt("digite o primeiro valor"));
    return valor01;
}

function capturaSegundoValor() {
    let valor02 = parseInt(prompt("digite agora o segundo valor"));
    return valor02;
}

function calcular() {
    let calcula01 = capturaPrimeiroValor();
    let calcula02 = capturaSegundoValor();

    somar(calcula01,calcula02)
}

function somar(valor1,valor2){
    return(valor1+valor2);
}

export default somar;

calcular();


//teste test testeteteteste