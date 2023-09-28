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
 function calcularPrimo(){
    try {

         displayValue = esPrimo(displayValue);
         document.getElementById("display").value = displayValue;

         
     } catch (error) {
         alert("Error en la expresión");
         clearDisplay();
     }
}

function calcDivInt(){
    try {
        
        num2=document.getElementById("display-2").value;
        num1=document.getElementById("display-1").value;

        document.getElementById("display").value = dividirEnteros(num1,num2);
         
     } catch (error) {
         alert("Error en la expresión");
         clearDisplay();
     }
}
function calcMCD(){
    try {

        num1 = document.getElementById("display-1").value;
        num2 = document.getElementById("display-2").value;

        document.getElementById("display").value = calcularMCD(num1,num2)
    } catch (error){
        alert("Error en la expresión");
        clearDisplay();
    }
}
function calcMCM(){
    try{
        num1 = document.getElementById("display-1").value;
        num2 = document.getElementById("display-2").value;

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

//const permutaciones1 = permutacionesSinRepeticion(n, r);
//console.log(permutaciones);

//permutacion con repeticion
function permutacionesConRepeticion(n, r) {
    return Math.pow(n, r);
    }
//const permutaciones2 = permutacionesConRepeticion(n, r);
//console.log(permutaciones);

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
//const combinaciones1 = combinacionesSinRepeticion(n, r);
//console.log(combinaciones);
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
    //const combinaciones2 = combinacionesConRepeticion(n, r);
    //console.log(combinaciones);
//---->METODOS PARA CALCULAR Y MOSTRAR EN PANTALLA (Pendiente)



// Funciones Nicolas
// Función para calcular la secuencia de Euler
function Euler(a, n) {
    function calcularEuler(n) {
        let phi = 1;
        for (let i = 2; i < n; i++) {
            if (gcd(i, n) === 1) {
                phi++;
            }
        }
        return phi;
    }

    function gcd(a, b) {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }

    const phiN = calcularEuler(n);
    const resultado = BInt(a) ** BInt(phiN) % BInt(n);

    return resultado.toString();
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

// Función para verificar la congruencia entre dos términos
function sonCongruentes(a, b, m) {
    return a % m === b % m;
}

//--->METODOS PARA CALCULAR Y MOSTRAR EN PANTALLA (Pendiente)