function ValorAbsoluto() {
    let numero = parseFloat(document.getElementById("numero").value);


    let valorAbsoluto = Math.abs(numero);

    document.getElementById("resultado").innerHTML = "Número: " + numero + "<br>Valor Absoluto: " + valorAbsoluto;
}
