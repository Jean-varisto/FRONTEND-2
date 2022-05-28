function multiplicacao(valor1,valor2){
    if(valor1==0 || valor2==0){
        return("não se pode multiplicar por 0")
    }else{
    return(valor1*valor2);
    }
}

export default multiplicacao;