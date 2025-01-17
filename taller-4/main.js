//Crear una lista con nombres e iterarla
const nombres = [
    'Mathias', 'Juan Jose', 'Adriano', 'Yurani'
]
//Agregar 2 nombres usando push
nombres.push('Maria', 'Marina');

//Cuantas letras tiene cada nombre
for( let nombre of nombres ) {
    console.log(nombre, 'tiene', nombre.length, 'letras');;
}

//Crear una lista con 10 numeros
const nu = [
    '10', '-22', '8', '-32', '52', '-81', '94', '46', '91', '2'
]

//Algoritmo que busque el numero 2

let encontrar = false;

for (let num of nu) {
    if (num === '2') {
        encontrar = true;
    }
}

if (encontrar) 
    console.log('Se encontro el numero 2');
else {
    console.log('El numero 2 no se encuentra en la lista');
}

//Diseñe un algoritmo de determine si el pastor esta dentro del corral}
//Contar las ovejas
//Contar a todos los animales
const corral = [
    'gallina','oveja','burro','oveja','oveja','perro','pastor',
]

let pastorAdentro = false;
let contarOvejas = 0;
let totalAnimales = 0;

for (let animal of corral) {
    totalAnimales++;
    
    if (animal === 'pastor') {
        pastorAdentro = true; 
    }

    if (animal === 'oveja') {
        contarOvejas++;
    }
}

if (pastorAdentro) 
    console.log('El pastor esta dentro del corral');
else {
    console.log('El pastor no esta en el corral');
}

console.log('La cantidad de ovejas es', contarOvejas);
console.log('La cantidad total de animales es', totalAnimales - pastorAdentro);