function Valor() {

    let tipoUva = document.getElementById("tipoUva").value;
    let tamanoUva = parseInt(document.getElementById("tamanoUva").value, 10);
    let kilos = parseFloat(document.getElementById("kilos").value);

    const precioInicial = 2000;
    let precioPorKilo;

    if (tipoUva === "A") {
        if (tamanoUva === 1) {
            precioPorKilo = precioInicial + 2000;
        } else if (tamanoUva === 2) {
            precioPorKilo = precioInicial + 1000;
        }
    } else if (tipoUva === "B") {
        if (tamanoUva === 1) {
            precioPorKilo = precioInicial - 500;
        } else if (tamanoUva === 2) {
            precioPorKilo = precioInicial - 900;
        }
    }

    let Total = kilos * precioPorKilo;

    document.getElementById("resultado").innerHTML = `El valor total del embarque es: $${Total.toLocaleString()}`;
}
