const boton = document.getElementById("btnconvertir");

boton.addEventListener("click", calcularConversion);

function calcularConversion() {
    const monto = Number(document.getElementById("montoinput").value);
    const divisa = document.getElementById("divisaselect").value;

    if (monto <= 0 || Number.isNaN(monto)) {
        alert("Por favor, ingresa un monto válido");
        return;
    }

    let tasa = 0;
    let nombre = "divisa";

    if (divisa === "eur") {
        tasa = 0.92;
        nombre = "Euros";
    } else if (divisa === "mxn") {
        tasa = 17.00;
        nombre = "Pesos mexicanos";
    } else if (divisa === "jpy") {
        tasa = 149.50;
        nombre = "Yenes japoneses";
    }

    const total = monto * tasa;

    alert(
        "El resultado de la conversión es: " +
        total.toFixed(2) +
        " " +
        nombre
    );
}