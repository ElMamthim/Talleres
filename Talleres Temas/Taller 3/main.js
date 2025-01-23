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

function nummax(lista) {
    let max = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > max) {
            max = lista[i];
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

function contar(lista) {
    const conteo = {};
    
    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];
        if (conteo[elemento]) {
            conteo[elemento]++;
        } 
        else {
            conteo[elemento] = 1;
        }
    }
    return conteo;
}

const elementos = ['manzana', 'pera', 'manzana', 'uva', 'pera', 'manzana', 'plátano'];
console.log('Los elementos encontrados son', contar(elementos));

// 5. Encontrar la cadena más larga: Dada una lista de cadenas, crea una función en JavaScript que recorra la lista y encuentre la cadena más larga. Devuelve esa cadena.

function cadenalarga(lista) {
    let cadenamlarga = ''; 

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].length > cadenamlarga.length) {
            cadenamlarga = lista[i];
        }
    }
    return cadenamlarga;
}

const cadenas = ['Mathias', 'Lucas', 'Juan', 'Sebastian', 'Adriano', 'Erica', 'Laura', 'Sara'];
console.log('La cadena mas larga es', cadenalarga(cadenas));

// 6. Concatenar cadenas: Dada una lista de cadenas, crea una función en JavaScript que recorra la lista y concatene todas las cadenas en una sola. Devuelve la cadena resultante.

function concatenacion(lista) {
    let cadenaconcatenada = "";

    for (let i = 0; i < lista.length; i++) {
        cadenaconcatenada += lista[i];
    }
    return cadenaconcatenada;
}

const cadenasc = ['Hola', ' ', 'como', ' ', 'estan', ' ', 'todos!' ];
console.log('La concatenacion es', concatenacion(cadenasc));

// 7. Ordenar lista de números: Dada una lista de números desordenados, crea una función en JavaScript que recorra la lista y la ordene de menor a mayor. Devuelve la lista ordenada.

function listan(lista) {
    for (let i = 0; i < lista.length; i++) { 
        for (let j = 0; j < lista.length - 1; j++) { 
            if (lista[j] > lista[j + 1]) { 
                let list = lista[j];
                lista[j] = lista[j + 1]; //Let adicional para que se puedan intercambiar los elementos de la lista nume
                lista[j + 1] = list;
            }
        }
    }
    return lista;
}

const nume = [5, 54, 100, 1, 12, 71, 10, 8, 2, 7];
console.log('La lista ordenada es', listan(nume));

// 8. Eliminar elementos duplicados: Dada una lista de elementos, crea una función en JavaScript que recorra la lista y elimine los elementos duplicados. Devuelve una nueva lista que contenga únicamente los elementos únicos.

function elementosduplicados() {
    for (let i = 0; i < lista.length; i++) {

    }
}

const numer = [2, 3, 2, 11, 12, 1, 5, 2, 5, 16, 6, 1, 2, 3];
console.log('La lista ordenada es', elementosduplicados(numer));

// 9. Suma de dos listas: Dadas dos listas de números del mismo tamaño, crea una función en JavaScript que recorra ambas listas y devuelva una nueva lista donde cada elemento sea la suma de los elementos correspondientes de las dos listas.



// 10. Encontrar la intersección de dos listas: Dadas dos listas de números, crea una función en JavaScript que recorra ambas listas y devuelva una nueva lista que contenga los elementos comunes a ambas listas.