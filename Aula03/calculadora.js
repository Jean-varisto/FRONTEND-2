// import somar from "./somar.js";
// import subtracao from "./subtracao.js";
// import multiplicacao from "./multiplicacao.js";
// import divisao from "./divisao.js";

//     // somar(valor1,valor2);
//     // subtracao(valor1,valor2);
//     // multiplicacao(valor1,valor2);
//     // divisao(valor1,valor2);
//     // calcular(valor1,valor2);

//     somar()
//     subtracao(6,2)
//     multiplicacao(3,3)
//     divisao(10,5)
//     // calcular()

    function somar(){
        let valor1 = parseInt(prompt("digite o primeiro valor"));
        let valor2 = parseInt(prompt("digite agora o segundo valor"));
        alert(`o resultado da divisão é: ${valor1+valor2}`)
        // return(valor1+valor2);
    }

    function subtracao(){
        let valor1 = parseInt(prompt("digite o primeiro valor"));
        let valor2 = parseInt(prompt("digite agora o segundo valor"));
        alert(`o resultado da divisão é: ${valor1-valor2}`);
    }

    function divisao(){
        let valor1 = parseInt(prompt("digite o primeiro valor"));
        let valor2 = parseInt(prompt("digite agora o segundo valor"));
        if(valor1==0 || valor2==0){
            alert("não se pode dividir por 0")
        }else{    
        alert(`o resultado da divisão é: ${valor1/valor2}`);
        }
    }

    function multiplicacao(){
        let valor1 = parseInt(prompt("digite o primeiro valor"));
        let valor2 = parseInt(prompt("digite agora o segundo valor"));
        if(valor1==0 || valor2==0){
           alert("não se pode multiplicar por 0")
        }else{
        alert(`o resultado da multiplicação é: ${valor1*valor2}`);
        }
    }
