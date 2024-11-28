function verificarEdad() {
    
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value, 10);
    
    if (edad >= 18) 
    {
    document.getElementById("resultado").innerHTML = "Nombre: " + nombre + "<br>Edad: " + edad;
    } 
    else 
    {
        document.getElementById("resultado").innerHTML = "Eres menor de edad, no puedes usar esta APP";
    }
}

