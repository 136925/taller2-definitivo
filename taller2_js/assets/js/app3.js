function Datos() {

    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value, 10);
    let sexo = parseInt(document.getElementById("sexo").value, 10);

    if (sexo === 1 && edad >= 18) {
        document.getElementById("resultado").innerHTML = "Nombre: " + nombre + "<br>Edad: " + edad + "<br>Sexo: Masculino";
    } else {
        document.getElementById("resultado").innerHTML = "Eres menor de edad o no eres masculino, no puedes usar esta APP";
    }
}
