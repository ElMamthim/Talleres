//Sumar todas las edades
//Tocar el promedio de todas las edades

const people = [
    { name: 'Matias', gender: 'male', age: 18 },
    { name: 'Duvan', gender: 'male', age: 21 },
    { name: 'Yalef', gender: 'female', age: 22 },
    { name: 'Mady', gender: 'male', age: 30 },
    { name: 'Juan Carlos', gender: 'male', age: 47 },
    { name: 'Juan Diego', gender: 'male', age: 17 },
    { name: 'Juan Sebastian', gender: 'male', age: 18 }
];

let edades = 0;
for (let i = 0; i < people.length; i++) {
    edades += people[i].age;
}

const promedio = edades / people.length;

console.log('La suma de las edades es ' + edades);
console.log('El promedio de edad es ' + promedio);

// const people = [
//     { name: 'Matias', gender: 'male', age: 18 },
//     { name: 'Duvan', gender: 'male', age: 21 },
//     { name: 'Yalef', gender: 'female', age: 22 },
//     { name: 'Mady', gender: 'male', age: 30 }
// ];

// /** Hacer un algoritmo que cuente cuantas mujeres y cuantos hombres hay en la lista */
// let contarMujeres = 0;
// let contarHombres = 0;

// for( let i = 0; i < 4; i++ ) {
//     if( people[ i ].gender == 'male' ) {
//         contarHombres++;
//     }
//     else {
//         contarMujeres++;
//     }
// }

// for( let i = 0; i < 4; i++ ) {
//     if( people[ i ].age <= 20 ) {
//         console.log( people[ i ].name );
//     }
// }

// console.log( 'Mujeres: ', contarMujeres, ' Hombres: ', contarHombres );