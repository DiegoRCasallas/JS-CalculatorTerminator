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
    ajustarLinkVideo("");
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
function dividirEnteros(num1, num2) {
    if (num2 === 0) {
      return "No es posible dividir por cero";
    }
    return Math.trunc(num1 / num2);
  }

  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    if (numero <= 3) {
      return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= numero) {
      if (numero % i === 0 || numero % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }
  // Función para encontrar el MCD (Máximo Común Divisor)
function calcularMCD(a, b) {
    if (b === 0) {
        return a;
    } else {
        return calcularMCD(b, a % b);
    }
}

// Función para encontrar el MCM (Mínimo Común Múltiplo)
function calcularMCM(a, b) {
    // MCM(a, b) = (a * b) / MCD(a, b)
    return (a * b) / calcularMCD(a, b);
}
 //---->METODOS PARA CALCULAR Y MOSTRAR EN PANTALLA (Pendiente)
 function mostrarEsPrimo(){
    try {

         displayValue = esPrimo(displayValue);
         document.getElementById("display").value = displayValue;
         ajustarLinkVideo(linkPrimo);

         
     } catch (error) {
         alert("Error en la expresión");
         clearDisplay();
     }
}

function mostrarDivInt(){
    try {
        
        num2=document.getElementById("display-2").value;
        num1=document.getElementById("display-1").value;

        document.getElementById("display").value = dividirEnteros(num1,num2);
        ajustarLinkVideo(linkDivisionEntera)         
     } catch (error) {
         alert("Error en la expresión");
         clearDisplay();
     }
}
function mostrarMCD(){
    try {

        num1 = document.getElementById("display-1").value;
        num2 = document.getElementById("display-2").value;

        document.getElementById("display").value = calcularMCD(num1,num2)
        ajustarLinkVideo(linkMCD);
    } catch (error){
        alert("Error en la expresión");
        clearDisplay();
    }
}
function mostrarMCM(){
    try{
        num1 = document.getElementById("display-1").value;
        num2 = document.getElementById("display-2").value;
        ajustarLinkVideo(linkMCM)

        document.getElementById("display").value = calcularMCM(num1,num2)
    } catch (error){
        alert("Error en la expresión");
        clearDisplay();
    }
}
//Funciones Camilo
//permutacion sin repeticion
function permutacionesSinRepeticion(n, r) {
    if (n < r) {
        return 0; 
    }
    function factorial(num) {
        if (num <= 1) {
            return 1;
        }
        return num * factorial(num - 1);
    }
    const numerador = factorial(n);
    const denominador = factorial(n - r);
    return numerador / denominador;
    }
function mostrar_nPr(){
    try { 
        let r=document.getElementById("display-2").value;
        let n=document.getElementById("display-1").value;
        document.getElementById("display").value = permutacionesSinRepeticion(n,r);
        ajustarLinkVideo(link_npr);
        } catch (error) {
            alert("Error en la expresión");
            clearDisplay();
        }
}

//permutacion con repeticion
function permutacionesConRepeticion(n, r) {
    return Math.pow(n, r);
    }
function mostrar_nPr_R(){
    try { 
        r=document.getElementById("display-2").value;
        n=document.getElementById("display-1").value;
        document.getElementById("display").value = permutacionesConRepeticion(n,r);
        ajustarLinkVideo(link_npr);
        } catch (error) {
            alert("Error en la expresión");
            clearDisplay();
        }
}

//combinacion sin repeticion
function combinacionesSinRepeticion(n, r) {
    if (n < r) {
        return 0; 
    }
    function factorial(num) {
        if (num <= 1) {
            return 1;
        }
        return num * factorial(num - 1);
    }
    const numerador = factorial(n);
    const denominador = factorial(r) * factorial(n - r);
    return numerador / denominador;
}
function mostrar_nCr(){
    try {
        r=document.getElementById("display-2").value;
        n=document.getElementById("display-1").value;
        document.getElementById("display").value = combinacionesSinRepeticion(n,r);
        ajustarLinkVideo(link_ncr);
        } catch (error) {
            alert("Error en la expresión");
            clearDisplay();
        }
}

//combinacion con repeticion
function combinacionesConRepeticion(n, r) {
    function factorial(num) {
        if (num <= 1) {
            return 1;
        }
        return num * factorial(num - 1);
    }
    const numerador = factorial(n + r - 1);
    const denominador = factorial(r) * factorial(n - 1);
    return numerador / denominador;
    }
function mostrar_nCr_R(){
    try { 
        r=document.getElementById("display-2").value;
        n=document.getElementById("display-1").value;
        document.getElementById("display").value = combinacionesConRepeticion(n,r);
        ajustarLinkVideo(link_ncr);
        } catch (error) {
            alert("Error en la expresión");
            clearDisplay();
        }
}
//---->METODOS PARA CALCULAR Y MOSTRAR EN PANTALLA (Pendiente)

// Funciones Nicolas

// Función para calcular la secuencia de Euler

function secuenciaEuler(var1, var2) {
    let resultado = Math.pow(var2, (var1 - 1));
    let residuo = resultado % var1;
    return residuo;
}

  
// Función para calcular la secuencia de Fibonacci
function Fibonacci(inicio, saltos) {
    const fibonacciSecuencia = [inicio];
    let numAnterior = inicio;
    let numActual = inicio;

    for (let i = 1; i < saltos; i++) {
        const siguienteNumero = numAnterior + numActual;
        fibonacciSecuencia.push(siguienteNumero);
        numAnterior = numActual;
        numActual = siguienteNumero;
    }

    return fibonacciSecuencia;
}

// Función para verificar la congruencia entre dos términos y un modulo dado

function sonCongruentes(a,b,mod){
    let resultadoA = a % mod;
    let resultadoB= b % mod; 
    return resultadoA === resultadoB;

}

//--->METODOS PARA CALCULAR Y MOSTRAR EN PANTALLA (Pendiente)

function mostrarFibonacci(){
    try {
        let num1=parseInt(document.getElementById("display-1").value);
        let num2=parseInt(document.getElementById("display-2").value);
        document.getElementById("display").value = Fibonacci(num1,num2);
        ajustarLinkVideo(linkFibonacci);
    } catch (error) {
        alert("Error en la expresión");
        clearDisplay();
    }
}

function mostrarEuler(){
    try {
        let num1=parseInt(document.getElementById("display-1").value);
        let num2=parseInt(document.getElementById("display-2").value);
        document.getElementById("display").value = secuenciaEuler(num1,num2);
        ajustarLinkVideo(linkEuler);
    } catch (error) {
        alert("Error en la expresión");
        clearDisplay();
    }
}

function mostrarCongruencia(){
    try {
        let num1 = parseInt(document.getElementById("display-1").value);
        let num2 = parseInt(document.getElementById("display-2").value);
        let mod = parseInt(document.getElementById("display").value);
        document.getElementById("display").value =sonCongruentes(num1, num2,mod);
        ajustarLinkVideo(linkCongruencia);
    } catch (error) {
        alert("Error en la expresión");
        clearDisplay();
    }
}

// 
