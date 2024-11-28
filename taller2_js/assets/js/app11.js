function Costo() {

    let estrato = parseInt(document.getElementById("estrato").value, 10);
    let metros = parseFloat(document.getElementById("metrosCubicos").value);

    const valoresPorEstrato = {
        1: 5000,
        2: 6500,
        3: 7000,
        4: 8000,
        5: 9200,
        6: 10000
    };

    if (valoresPorEstrato[estrato] !== undefined) {
        let costo = metros * valoresPorEstrato[estrato];
        document.getElementById("resultado").innerHTML = `El costo total es: $${costo.toFixed(2)}`;
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, seleccione un estrato valido.";
    }
}
