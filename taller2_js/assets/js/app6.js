function Positivos() {

    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = "";

    if (numero1 > 0) {
        resultado += "Primer numero positivo: " + numero1 + "<br>";
    }
    if (numero2 > 0) {
        resultado += "Segundo numero positivo: " + numero2 + "<br>";
    }

    if (resultado === "") {
        resultado = "No se ingresaron numeros positivos.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
