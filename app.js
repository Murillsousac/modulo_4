function calcularImc() {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

    let calculo = peso / (altura * altura)
    let situacao;

    if (calculo < 18){
        situacao = "magro"
    }
    else if (calculo >= 18 & calculo < 24.9){
        situacao = "normal"
    }
    else if (calculo > 25 & calculo < 29.9){
        situacao = "acima do peso"
    }
    else if (calculo > 30 & calculo < 34.9){
        situacao = "obeso"
    }
    else if (calculo > 35 & calculo < 40){
        situacao = "obesidade moderada"
    }
    else {
        situacao = "obesidade mórbida"
    }
 


    document.getElementById("imc").textContent = "seu imc: " + calculo.toFixed(2);
    document.getElementById("situação").textContent = "sua situação: " + situacao

}