function Porcentaje() {

    let numero = parseFloat(document.getElementById("numero").value);

    let porcentaje = numero * 0.05;

    document.getElementById("resultado").innerHTML = "Numero: " + numero + "<br>5% del numreo: " + porcentaje;
}
