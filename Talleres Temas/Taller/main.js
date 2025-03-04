// # Taller 1: 
// ### Introducción a Programación con JavaScript

// Para la entrega de los puntos de este taller debes tener en cuenta los siguientes aspectos 
// - Crear una carpeta que se llame talleres, dentro de la cual vas a crear una segunda carpeta que se llamará taller-1. Debes resolver cada punto en un archivo aparte usando un archivo index.html para poder enlazarlos.
// - Hacer uno o varios commits y subirlo al repositorio.

// ### Puntos del taller

// 1. Inserción y acceso a listas.

//    Escribe un programa que:

//     - Cree una lista con los números del 1 al 5.
//     - Agregue el número 6 al final.
//     - Imprima el tercer elemento de la lista.

const numeros = [1, 2, 3, 4, 5];
numeros.push('6')
console.log(numeros[2])

// 2. Uso de variables y constantes

//     Crea un programa que:

//    - Declare una constante llamada PI con el valor 3.1416.
//    - Declare una variable llamada radio con el valor 10.
//    - Calcule el área de un círculo usando PI y radio e imprima el resultado.

const PI = 3.1416;
let radio = 10
console.log(PI * radio ** 2)

// 3. Comparación de números

//     Haz un programa que:

//     - Solicite al usuario dos números.
//     - Compare cuál es mayor y cuál es menor.
//     - Imprima un mensaje indicando el resultado.

const n1 = +prompt('Ingresa un numero');
const n2 = +prompt('Ingresa otro numero');

if (isNaN(n1) || isNaN(n2)) {
    console.log('Algun valor no es un numero intenta otra vez')
}
else {
if (n1 > n2) {
    console.log('El numero ' + n1 + ' es mayor que ' + n2);
} 
else if (n1 < n2) {
    console.log('El numero ' + n2 + ' es mayor que ' + n1);
} 
else {
    console.log('Ambos numeros son iguales ' + n1);
}}

// 4. Uso de operadores aritméticos

//     Escribe un programa que calcule:

//     - La suma, resta, multiplicación y división entre dos números ingresados por el usuario.

const nu1 = +prompt('Ingresa un numero');
const nu2 = +prompt('Ingresa otro numero');

const suma = nu1 + nu2;
const resta = nu1 - nu2;
const multiplicacion = nu1 * nu2;
const division = nu1 / nu2;

console.log('La suma de ' + nu1 + ' y ' + nu2 + ' es ' + suma);
console.log('La resta de ' + nu1 + ' y ' + nu2 + ' es ' + resta);
console.log('La multiplicación de ' + nu1 + ' y ' + nu2 + ' es ' + multiplicacion);
console.log('La división de ' + nu1 + ' entre ' + nu2 + ' es ' + division);


// 5. Condicionales

//     Crea un programa que:

//     - Solicite al usuario un número.
//     - Determine si el número es mayor que cero, menor que cero o cero.
//     - Imprima un mensaje indicando el resultado.

const num1 = prompt('Ingresa un numero');

if (num1 > 0) {
    console.log('El número es mayor que 0.');
} 
else if (num1 < 0) {
    console.log('El numero es menor que 0');
} 
else if (num1 == 0) {
    console.log('El numero es igual que 0');
} 
else {
    console.log('No has introducido un numero');
}

// 6. Analiza un string y concatena cadenas

//     Crea un programa que:

//     - Solicite al usuario un nombre.
//     - Determine la cantidad de letras del nombre.
//     - Imprima un mensaje que diga "Hola [tu-nombre], tu nombre tiene [N] cantidad de caracteres".

const nombre = prompt('Cual es tu nombre?')

const letras = nombre.length;

console.log(nombre + ' tiene un total de ' + letras + ' letras')

// 7. Operador ternario

//     Crea un programa que:

//     - Solicite una calificación numérica al usuario.
//     - Use un operador ternario para determinar si la calificación es "Aprobado" (≥60) o "Reprobado" (<60).
//     - Imprima el resultado.

const calificacion = prompt('Ingresa tu clasificacion (De 0 a 100)')

if (isNaN(calificacion) || calificacion <0 || calificacion >100) {
    console.log('Tu calificacion no es valida, ingresa algun numero');
}
else if (calificacion >= 60) {
    console.log('Aprobado')
}
else {
    console.log('Reprobado')    
}

// 8. Uso de if else if

//     Crea un programa que:

//     - Solicite una calificación numérica al usuario (0 a 100).
//     - Determine si la calificación corresponde a:
//         - "Excelente" (90-100)
//         - "Bueno" (80-89)
//         - "Regular" (70-79)
//         - "Insuficiente" (<70)
//     - Imprima el resultado.

const calificacio = prompt('Ingresa tu calificacion (De 0 a 100)')

if (isNaN(calificacio) || calificacio < 0 || calificacio > 100) {
    console.log('Calificación no válida');
} 
else if (calificacio >= 90) {
    console.log('Excelente');
} 
else if (calificacio >= 80) {
    console.log('Bueno');
} 
else if (calificacio >= 70) {
    console.log('Regular');
} 
else {
    console.log('Insuficiente');
}


// 9. Comparación de cadenas

//     Crea un programa que:

//     - Defina una constante con el nombre de password y asigne "123456789"
//     - Solicita una cadena al usuario, indicando en el mensaje "Digite su nombre"
//     - Solicite una cadena al usuario, indicando en el mensaje "Digite su contraseña".
//     - Compare la contraseña es igual o diferente al valor en 'password' utilizando el operador ===.
//     - Imprima un mensaje indicando el resultado, por ejemplo: 
//     - Si las cadenas son iguales "Bienvenido [nombre-usuario]".
//     - Si las cadenas son diferentes "Acceso denegado"

const password = '123456789';

const nombr = prompt( 'Digite su nombre' );
const contrasena = prompt( 'Digite su contraseña' );

if( contrasena === password ) {
    alert( 'Bienvenido ' + nombr );
}
else {
    alert( 'Acceso denegado' );
}

// 10. Switch Case meses del año.

//     Crea un programa que:

//     - Solicite el nombre de un mes.
//     - Investigue cuales meses del año tienen 28, 29, 30, 31 días, año no bisiesto.
//     - Defina la casuistica para que los meses del año con la misma cantidad de dias queden agrupados.
//     - Imprima el resultado dependiendo del mes del año.
//         Ej: valor ingresado 'noviembre', mensaje "El mes de noviembre tiene 10 dias"

//     Nota: Intenta hacer este último ejercicio usando if-else

const mes = prompt('Ingresa el nombre de un mes del año')

