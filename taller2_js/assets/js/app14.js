function Costo() {

    let numAlumnos = parseInt(document.getElementById("numAlumnos").value, 10);
    let costoPorAlumno;

    if (numAlumnos >= 100) {
        costoPorAlumno = 6500;
    } else if (numAlumnos >= 50 && numAlumnos<= 99) {
        costoPorAlumno = 7000;
    } else if (numAlumnos >= 30 && numAlumnos<=49) {
        costoPorAlumno = 9500;
    } 
    if (numAlumnos< 30 ){
        costoPorAlumno = 0;
        costoDelAutobus = 400000;
        costoDeMenosDeTreinta= costoDelAutobus / numAlumnos
    }
    
    let Total = numAlumnos * costoPorAlumno;

    document.getElementById("resultado").innerHTML = `El costo total del viaje es: $${Total.toLocaleString()}`;
    document.getElementById("resultado").innerHTML = `El costo total del viaje por alumno: $${costoDelAutobus.toLocaleString()}`;
    document.getElementById("resultadoN").innerHTML = `El costo total del viaje por alumno: $${costoDeMenosDeTreinta.toLocaleString()}`;
}
