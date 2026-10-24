let entrada;
while (true) {
    entrada = prompt("Ingresa la temperatura en grados Celsius:");

    if (entrada !== null && entrada.trim() !== "" && !isNaN(entrada)) {
        break;
    }

    alert(" error: ingresar valor valido Intenta de nuevo.");
}

let celsius = Number(entrada);
let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9 / 5) + 32;


let contenedorDOM = document.getElementById("resultado");
contenedorDOM.innerHTML = `
    Temperatura ingresada: ${celsius} °C <br>
    Grados Kelvin: ${kelvin} K <br>
    Grados Fahrenheit: ${fahrenheit} °F
`;