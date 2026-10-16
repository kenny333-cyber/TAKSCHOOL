// 1. Seleccionar elementos del DOM
const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");

const divResultado = document.getElementById("resultado");
const txtResultado = document.getElementById("txtResultado");

// 2. Evento para Sumar
btnSumar.addEventListener("click", function () {

    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);

    // Validar los números
    if (isNaN(n1) || isNaN(n2)) {
        alert("Ingresa ambos números correctamente.");
        return;
    }

    // Operación de suma
    const suma = n1 + n2;

    // Mostrar resultado
    txtResultado.innerText = "Resultado de la Suma: " + suma;
    divResultado.classList.remove("hidden");
});


btnRestar.addEventListener("click", function () {

    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);

   
    if (isNaN(n1) || isNaN(n2)) {
        alert("Ingresa ambos números correctamente.");
        return;
    }

    const resta = n1 - n2;

    txtResultado.innerText = "Resultado de la Resta: " + resta;
    divResultado.classList.remove("hidden");
});


btnMultiplicar.addEventListener("click", function () {

    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Ingresa ambos números correctamente.");
        return;
    }

  
    const multiplicacion = n1 * n2;

    // Mostrar resultado
    txtResultado.innerText = "Resultado de la Multiplicación: " + multiplicacion;
    divResultado.classList.remove("hidden");
});


btnDividir.addEventListener("click", function () {

    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);


    if (isNaN(n1) || isNaN(n2)) {
        alert("Ingresa ambos números correctamente.");
        return;
    }

    if (n2 === 0) {
        alert("No se puede dividir entre cero.");
        return;
    }

    // Operación de división
    const division = n1 / n2;

    // Mostrar resultado
    txtResultado.innerText = "Resultado de la División: " + division;
    divResultado.classList.remove("hidden");
});