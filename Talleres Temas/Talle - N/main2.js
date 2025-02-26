const products = [
    { name: 'Mandarina', tipo: 'fruta', precioLibra: 4200, cantidadDisponible: 14 },
    { name: 'Uvas', tipo: 'fruta', precioLibra: 9000, cantidadDisponible: 8 },
    { name: 'Mangos', tipo: 'fruta', precioLibra: 4500, cantidadDisponible: 9 },
    { name: 'Peras', tipo: 'fruta', precioLibra: 3300, cantidadDisponible: 5 },
    { name: 'Bananos', tipo: 'fruta', precioLibra: 2800, cantidadDisponible: 20 },
    { name: 'Papa', tipo: 'tuberculo', precioLibra: 1500, cantidadDisponible: 300 },
    { name: 'Cebolla', tipo: 'tuberculo', precioLibra: 1800, cantidadDisponible: 150 }
];

// Contar la cantidad de tipos de frutas que hay en existencia (5)
// Contar la cantidad disponible de frutas y tuerbculos (54: frutas, 450: tuberculos)
// Calcular cuanto vale todo el inventario ()

let frutas = 0;
for (let i = 0; i < products.length; i++) 
    if (products[i].tipo === 'fruta') {
        frutas++;
    }

console.log('La cantidad de frutas es de ' + frutas);

let cantidadFruta = 0;
let cantidadTuberculo = 0;

for (let i = 0; i < products.length; i++)
if (products[i].tipo === 'fruta') {
    cantidadFruta += products[i].cantidadDisponible;
}
else if (products[i].tipo === 'tuberculo') {
        cantidadTuberculo += products[i].cantidadDisponible;
}

console.log('Hay un total de ' + cantidadFruta + ' frutas');
console.log('Hay un total de ' + cantidadTuberculo + ' tuberculos');

let valorInventario = 0;

for (const product of products) {
    valorInventario += product.precioLibra * product.cantidadDisponible;
}

console.log('Valor total del inventario ' + valorInventario);
