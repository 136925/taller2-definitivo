function DistintoDeCero() {

    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = "";

    if (numero1 !== 0) {
        resultado += "Primer numero: " + numero1 + "<br>";
    }
    if (numero2 !== 0) {
        resultado += "Segundo numero: " + numero2 + "<br>";
    }

    if (resultado === "") {
        resultado = "Ambos numeros son cero.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
