// AQUÍ UN EQUIPO DE HACKERS :v
let displayValue = "";

//para usar con los inputs de arriba (los dos pequeños)
let displayValue1="";
let displayValue2="";

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
    document.getElementById("display-1").value= displayValue;
    document.getElementById("display-2").value= displayValue;
}


/**
 * La función agrega un valor a la visualización y actualiza el valor del elemento de visualización.
 * @param value - El parámetro de valor es el valor que desea agregar a la pantalla.
 */
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
       /* La línea `displayValue = eval(displayValue);` está evaluando el valor de la variable
       `displayValue` como una expresión JavaScript. La función `eval()` toma un argumento de cadena
       y lo evalúa como código JavaScript. En este caso, se trata de evaluar la expresión matemática
       almacenada en "displayValue" y asignar el resultado nuevamente a "displayValue". */
        displayValue = eval(displayValue);
        
        document.getElementById("display").value = displayValue;
    } catch (error) {
        alert("Error en la expresión");
        clearDisplay();
    }
}



//Funciones Esteban

//Funciones Camilo

// Funciones Nicolas