//1. Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.
const nu1 = +prompt('Ingresa un numero');
const nu2 = +prompt('Ingresa otro numero');

const suma = nu1 + nu2;
console.log('La suma de ' + nu1 + ' + ' + nu2 + ' es ' + suma);

//2. Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase `Hola X, grandioso! Tienes X años`. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: `Hola Juan, grandioso! Tienes 20 años`

const nombre = prompt('Ingresa tu nombre')  
const fecha = prompt( nombre + ' ingresa tu año de nacimiento');

const añoactual = 2025;
const edad = añoactual - fecha

console.log ('Hola ' + nombre , ' grandioso! Tienes ' + edad + ' años')

//3. Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.

//Si es múltiplo debe imprimir `Si, el número x es múltiplo 5`, de lo contrario debe imprimir `No, el número x no es múltiplo de 5`.

//*NOTA: Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.*

