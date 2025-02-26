// const numeroAleatorio = Math.random() * 10;     
//                      0.73453452525 * 7.3453452525   

// const entero = Math.round( numeroAleatorio );  // Round redondea 
//         7 = Math.round( 7.3453452525 );      // 7 
//         7 = Math.floor( 7.3453452525 );      // 7  
//         7 = Math.ceil( 7.3453452525 );       // 8              
//         7 = numeroAleatorio.toFixed(0);

// console.log( numeroAleatorio.toFixed( 0 ) );

// const list = [];
// console.log( list );    

/** 
 * 1. Capturar un numero.
 * 2. Generar un numero aleatorio
 * 3. Comparar el numero generado y el numero capturado
 *    Si hace match "Adivinaste el numero"
 *    Si NO hace match "Intentalo de nuevo"
 */


const numeroAleatorio = Math.floor(Math.random() * 10);

const numeroUsuario = parseInt(prompt('Introduce un número entre 0 y 10'));

if (numeroUsuario === numeroAleatorio) {
console.log('Adivinaste el numero!');
} 
else {
console.log('Intentalo denuevo el numero era ' + numeroAleatorio.toFixed(0));
}
