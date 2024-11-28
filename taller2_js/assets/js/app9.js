function Suma() {

    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let suma = numero1 + numero2;

    document.getElementById("resultado").innerHTML = "Primer número: " + numero1 + "<br>Segundo número: " + numero2 + "<br>Suma: " + suma;
}
