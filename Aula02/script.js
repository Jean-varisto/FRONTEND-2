let introducao = alert(`
Vamos jogar JO - KEN - PO!? 
Clique em OK!`);


var pontosUsuario = 0;
var pontosMaquina = 0;


function capturaMaoUsuario() {
    let maoUsuario = parseInt(prompt("Pedra (1), Papel(2) ou Tesoura(3)?"));
    return maoUsuario;
}

function capturaMaoMaquina() {
    let random = parseInt(Math.random() * 3 + 1);
    return random
}

// Criação um placar "vencedor" com array zerado para inicializar o placar determinado na partida 
let vencedor = [0, 0];

function jogar() {
    let maoMaquina = capturaMaoMaquina();
    let maoUsuario = capturaMaoUsuario();
    console.log("Sua mão foi:" + maoUsuario);
    console.log("A mão da máquina foi:" + maoMaquina);
    console.log("\n");

    switch (maoUsuario) {
        case maoMaquina:
            alert("RODADA: Empatou! ambos jogadores jogaram a mesma mão. \n Ninguém pontuou!");
            break;
        case 1: // Pedra
            if (maoMaquina == 2) {
                pontosMaquina++
                alert("RODADA: A maquina ganhou com: Papel! ( Você: Pedra)");
            } else {
                pontosUsuario++
                alert("RODADA: O usuario ganhou com: Pedra! ( Você: Tesoura)");
            }
            break;
        case 2: //Papel
            if (maoMaquina == 1) {
                pontosUsuario++
                alert("RODADA: O usuario ganhou com: Papel! ( Você: Pedra)");
            } else {
                pontosMaquina++
                alert("RODADA: A maquina ganhou com: Tesoura! ( Você: Papel)");
            }
            break;
        case 3: //Tesoura
            if (maoMaquina == 1) {
                pontosMaquina++
                alert("RODADA: A maquina ganhou com: Pedra! ( Você: Tesoura)");
            } else {
                pontosUsuario++
                alert("RODADA: O usuario ganhou com: Tesoura! ( Você: Papel)")
            }
        }

        console.log(" Pontos do Usuario:" + pontosUsuario);
        console.log("Pontos da maquina:" + pontosMaquina);
        console.log("\n");

        ganhador()

    };

    // let iniciar = () => {
    //     let exec = jogar();
    //     resultadoJogo = partida(exec[0], exec[1]);
    //     ganhador()
    // };

    function ganhador(){
        if(pontosMaquina==2){
            alert ("Maquina Ganhou")
        }
        else if (pontosUsuario==2){
            alert ("Usuario Ganhou")
        }
    }

    function resetarPontuacao(){
        pontosMaquina = 0;
        pontosUsuario = 0;

        alert("jogo resetado!")
    }