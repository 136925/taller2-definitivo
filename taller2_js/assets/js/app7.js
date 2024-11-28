function Positivo() {

    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);


    if (numero1 > 0 || numero2 > 0) {

        document.getElementById("resultado").innerHTML = "Primer numero: " + numero1 + "<br>Segundo numero: " + numero2;
    } else {
        document.getElementById("resultado").innerHTML = "Ninguno de los numeros es positivo.";
    }
}
