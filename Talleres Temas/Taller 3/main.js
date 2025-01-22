// 1. Suma de elementos: Dada una lista de números, crea una función en JavaScript que recorra la lista y devuelva la suma de todos los elementos.

function sumar(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

const numeros = [1, 2, 3];
console.log('Los elementos sumados dan', sumar(numeros));

// 2. Encontrar el número máximo: Dada una lista de números, crea una función en JavaScript que recorra la lista y encuentre el número máximo en la lista. Luego, devuelve ese número.  

function nummax(list) {
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}

const num = [20, 1, 2, 15 ,30];
console.log('El numero maximo es', nummax(num));

// 3. Filtrar números pares: Dada una lista de números, crea una función en JavaScript que recorra la lista y filtre solo los números pares. Devuelve una nueva lista que contenga únicamente los números pares encontrados.

function pares(lista) {
    let paresn = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 == 0) {
            paresn.push(lista[i]);
        }
    }
    return paresn;
}

// Una manera mas sencilla de realizar este punto pero se utiliza el filter para hacerlo, segun pude entender este busca cierto valor en especifico 
function paresf(lista) {
    return lista.filter(pars => pars % 2 === 0);
}

const pars = [2, 10, 7, 9, 6, 432, 9, 3, 33, 97, 62];
console.log('Los numeros pares son', pares(pars));
console.log('Los numeros pares son', paresf(pars));

// 4. Contar elementos repetidos: Dada una lista de elementos, crea una función en JavaScript que recorra la lista y cuente la cantidad de veces que aparece cada elemento. Devuelve un objeto donde las claves sean los elementos de la lista y los valores sean la cantidad de veces que aparecen.

function contar() {
    const conteo = {};
    
}

const elementos = ['manzana', 'pera', 'manzana', 'uva', 'pera', 'manzana', 'plátano'];
console.log('se encontraron los siguientes elementos', contar(elementos));

// 5. Encontrar la cadena más larga: Dada una lista de cadenas, crea una función en JavaScript que recorra la lista y encuentre la cadena más larga. Devuelve esa cadena.