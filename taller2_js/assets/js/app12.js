function Presupuesto() {

    let Personas = parseInt(document.getElementById("numPersonas").value, 10);

    let Platillo;
    if (Personas <= 200) {
        Platillo = 14000;
    } else if (Personas <= 300) {
        Platillo = 11000;
    } else {
        Platillo = 9000;
    }

    let Total = Personas * Platillo;

    document.getElementById("resultado").innerHTML = `El presupuesto total es: $${Total.toLocaleString()}`;
}
