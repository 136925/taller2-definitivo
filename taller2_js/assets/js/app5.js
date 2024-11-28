function RaizCuadrada() {

    let numero = parseFloat(document.getElementById("numero").value);

    if (numero < 0) {
        document.getElementById("resultado").innerHTML = "Numero: " + numero + "<br>Este numero tiene raiz imaginaria.";
    } else {
        let raizCuadrada = Math.sqrt(numero);
        document.getElementById("resultado").innerHTML = "Numero: " + numero + "<br>Raiz Cuadrada: " + raizCuadrada;
    }
}
