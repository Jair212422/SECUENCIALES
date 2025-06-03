function calcularAgua() {
  const consumo = parseFloat(document.getElementById('consumo').value);
  const precio = parseFloat(document.getElementById('precio').value);
  const resultado = consumo * precio;
  document.getElementById("resultado").innerText =
    "CONSUMO DE AGUA:" + resultado.toFixed(2);
}
function calcularElectricidad() {
  const kw = parseFloat(document.getElementById('kilowatts').value);
  const precio = parseFloat(document.getElementById('precio').value);
  const total = kw * precio;

  const resultado = document.getElementById('resultado');
  resultado.textContent = "Total a pagar: $" + total.toFixed(2);
}

function calcularFinal() {
    const precio = parseFloat(document.getElementById("precio").value);
    const descuento = precio * 0.20;
    const precioConDescuento = precio - descuento;
    const iva = precioConDescuento * 0.15;
    const precioFinal = precioConDescuento + iva;
    document.getElementById("resultado").innerHTML =
        `Precio con descuento: $${precioConDescuento.toFixed(2)}` +
        `Precio final con IVA: $${precioFinal.toFixed(2)}`;
}
function calcularAhorro(){
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const ahorroSemanal = (sueldo*0.15);
    const semanasPorMes = 4;
    const mesesPorAño = 12;
    const ahorroAnual = ahorroSemanal * semanasPorMes * mesesPorAño;

    document.getElementById("resultado").innerText =
    `El ahorro anual es de $${ahorroAnual.toFixed(2)}`;
}
function obtenerCheque(){
    const dias = parseInt(document.getElementById('dias').value);
    const hotel = parseFloat(document.getElementById('costoHotel').value);
    const comida = parseFloat(document.getElementById('comida').value);

    const total = dias * (hotel+comida);

    const totalCheque = document.getElementById('totalCheque');
    totalCheque.textContent = "Monto total del cheque:" + total.toFixed(2);
} 
  function calcularVoltaje() {
    const R = parseFloat(document.getElementById("Resistencia").value);
    const I = parseFloat(document.getElementById("corriente2").value);
    const V = R * I;
    document.getElementById("voltajeRes").innerText = "El valor de V es: " + V + " V";
  }
  function calcularPotencia() {
    const V = parseFloat(document.getElementById("Voltaje").value);
    const I = parseFloat(document.getElementById("corriente1").value);
    const P = V * I;
    document.getElementById("potenciaRes").innerText = "El valor de P es: " + P + " W";
  }
  function calcularArea() {
    const lado = parseFloat(document.getElementById("lado").value);
    const area = lado * lado;
    document.getElementById("resultado").innerText =
        "EL AREA ES:"+area;
    }
function calcularPromedio() {
    const e1 = parseFloat(document.getElementById("exam1").value);
    const e2 = parseFloat(document.getElementById("exam2").value);
    const e3 = parseFloat(document.getElementById("exam3").value);
    const promedio = e1 * 0.25 + e2 * 0.25 + e3 * 0.5;

    document.getElementById("resultado").innerText =
        "EL PROMEDIO ES:"+promedio;
}
function calcularTiempoVivido() {
    const edad = parseInt(document.getElementById("edad").value);
    const meses = edad * 12;
    const semanas = edad * 52;
    const dias = edad * 365;
    const horas = dias * 24;

    document.getElementById("resultado").innerHTML =
        `Has vivido:<br>` +
        ` ${meses} meses<br>` +
        ` ${semanas} semanas<br>` +
        ` ${dias} días<br>` +
        ` ${horas} horas`;
}
function calcularCosto() {
    const minutos = parseFloat(document.getElementById("minutos").value);
    const costoPorMinuto = parseFloat(document.getElementById("costoMinuto").value);
    const total = minutos * costoPorMinuto;
    document.getElementById("resultado").innerText = "El costo total seria:" + total.toFixed(2);
}
function calcularEstancia() {
    const noches = parseInt(document.getElementById("noches").value);
    const costoPorNoche = parseFloat(document.getElementById("costoNoche").value);
    const total = noches * costoPorNoche;
    document.getElementById("resultado").innerText ="El total a pagar por la estancia es de:"+total;
}

