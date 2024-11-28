function MayorDeEdad() {

    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value, 10);

    if (edad >= 18) {
        document.getElementById("resultado").innerHTML = "Nombre: " + nombre + "<br>Edad: " + edad;
    } else {
        document.getElementById("resultado").innerHTML = "La persona no es mayor de edad.";
    }
}
