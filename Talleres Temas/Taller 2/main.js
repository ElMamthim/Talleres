// //1. Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.
// const nu1 = +prompt('Ingresa un numero');
// const nu2 = +prompt('Ingresa otro numero');

// const suma = nu1 + nu2;
// console.log('La suma de ' + nu1 + ' + ' + nu2 + ' es ' + suma);

// //2. Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase `Hola X, grandioso! Tienes X años`. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: `Hola Juan, grandioso! Tienes 20 años`

// const nombre = prompt('Ingresa tu nombre')
// const fecha = prompt(nombre + ' ingresa tu año de nacimiento');

// const añoactual = 2025;
// const edad = añoactual - fecha

// console.log('Hola ' + nombre, 'grandioso! Tienes ' + edad + ' años')

// //3. Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.

// //Si es múltiplo debe imprimir `Si, el número x es múltiplo 5`, de lo contrario debe imprimir `No, el número x no es múltiplo de 5`.

// //*NOTA: Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.*

// const numero = prompt('Ingresa un numero');

// if (isNaN(numero)) {
//     console.log('Ingresaste un valor que no es un numero');
// }

// else
//     if (numero % 5 === 0) {
//         console.log('El numero', numero, 'Es multiplo de 5');
//     } 
//     else {
//         console.log('El numero', numero, 'No es multiplo de 5');
//     }

// //     4. Escribe un programa que le pida al usuario ingresar un número.
// //    - Si el número es múltiplo de 3 debe imprimir en la consola `bing`.
// //    - Si el número es múltiplo de 5 debe imprimir en la consola `bong`.
// //    - Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola `bingbong`.
// //    - Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

// const num = prompt('Ingresa un numero');

// if (isNaN(num)) {
//     console.log('Ingresaste un valor que no es un numero');
// }

// else 
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log('bingbong');
//     } 
//     else if (num % 3 === 0) {
//         console.log('bing');
//     } 
//     else if (num % 5 === 0) {
//         console.log('bong');
//     }
//     else {
//         console.log(num);
//     }

// // 5. Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces.
// // NOTA: utiliza un ciclo para imprimir la frase las 10 veces.

// const frase = prompt('Ingresa una frase');

// for (let i = 1; i <= 10; i++) {
//     console.log(i, frase);
// }

// // 6. Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.
// //     Por ejemplo, si el usuario ingresó la frase `Hola Mundo` y el número 5, el programa debe imprimir `Hola Mundo` 5 veces:

// //     ``` JavaScript
// //     Hola Mundo
// //     Hola Mundo
// //     Hola Mundo
// //     Hola Mundo
// //     Hola Mundo
// //     ```

// const fras = prompt('Ingresa una frase');
// const nume = prompt('Ingresa un numero');

// for (let i = 1; i <= nume; i++) {
//     console.log(i, fras);
// }

// // 7. Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

// //     ``` JavaScript
// //     5
// //     6
// //     7
// //     8
// //     9
// //     10
// //     ```

// //     NOTA:
// //        - Puedes asumir que el primer número siempre va a ser menor o igual que el segundo.
// //        - Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.


// const numer = parseInt(prompt('Ingresa un numero'));
// const numer2 = parseInt(prompt('Ingresa otro numero'));

// if (isNaN(numer) || isNaN(numer2)) {
//     console.log('Ingresaste un valor que no es numero');
// } 
// else if (numer > numer2) {
//     console.log('El primer numero debe ser menor que el segundo prueba nuevamente');
// } 
// else {
//     for (let i = numer; i <= numer2; i++) {
//         console.log(i);
//     }
// }

// 8. Crea un programa a partir de las siguientes instrucciones:

//    - Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
//    - Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
//    - Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
//    - Recorre el arreglo e imprímelo.
//    - Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

//     ``` JavaScript
//         Ingresa un nombre > Camilo
//         Ingresa otro nombre > Ariel
//         Pedro
//         Pablo
//         Ariel
//         Juan
//         Diana
//         Camilo
//     ```

let nombres = [
    "Pedro", "Pablo", "María", "Juan", "Diana"
]

const nombren = prompt('Ingresa un nombre');
nombres.push(nombren);

const nombrer = prompt('Ingresa otro nombre');
nombres[2] = nombrer;

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 9. Escribe un programa que:
//     - Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
//     - Elimine el segundo elemento.
//     - Recorra e imprima el arreglo.

//     Ejemplo:

//     ``` JavaScript
//         Ingresa un número> 5
//         1
//         3
//         4
//         5
//     ```

//     NOTA: los 3 pasos de este ejercicio se deben realizar con programación según lo visto en clase.

