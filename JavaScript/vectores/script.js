const frutas = [
    { nombre: 'patatas', precio: 3, stock: 500 },
    { nombre: 'manzanas', precio: 2, stock: 200 },
    { nombre: 'peras', precio: 1, stock: 100 },
    { nombre: 'plátanos', precio: 1.5, stock: 0 },
    { nombre: 'uvas', precio: 4, stock: 150 },
    { nombre: 'naranjas', precio: 2.5, stock: 250 },
    { nombre: 'piñas', precio: 5, stock: 0 },
    { nombre: 'kiwis', precio: 3.5, stock: 120 },
    { nombre: 'fresas', precio: 6, stock: 90 },
    { nombre: 'mangos', precio: 4.5, stock: 75 }
];


//solo el listado de los nombres (map): 10
//copia exacta del del vector frutas
const vectorAux=frutas.slice();
console.log(vectorAux);
const nombreFruta=frutas.map(frutas =>frutas.nombre);
console.log("Nombres:" ,nombreFruta);
const ordenadoPorNombre = vectorAux.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log('Ordenado por nombre', ordenadoPorNombre);
const todos=frutas.map(frutas=>frutas);
console.log("Objeto Array Completo")
//listado de frutas sin existencias (filter) : 2
const sinExistencia0=frutas.filter(frutas=>frutas.stock===0).map(fruta=>fruta.nombre);
console.log("Sin existencias",sinExistencia0)

//suma total del stock (reduce) :1485
const totalStock = frutas.reduce((acum, fruta) => acum + fruta.stock, 0);
console.log("TotalStock: "+totalStock);
//media de precios (recduce): 3.3 . Primero el total de medio y luego 
//divides entre frutas.length
const totalPrecio=frutas.reduce((sumaPrecio,fruta)=>sumaPrecio+fruta.precio,0);
console.log("el total de stock es",totalPrecio)
const mediaPrecio=totalPrecio/frutas.length;
console.log("Media"+mediaPrecio.toFixed(2));
//buscador dentro del array
// let nombreFrutaBuscar=prompt("teclea el nombre de la fruta");
// let aparicion=vectorAux.find(fruta=>fruta.nombre.toLocaleUpperCase===nombreFrutaBuscar.toLocaleUpperCase);
// if (aparicion==undefined) {
//     console.log("no se encuentra"+nombreFrutaBuscar)
// }else{
//     console.log("si esta: "+nombreFrutaBuscar)
// }
// //añadir fruta nueva
// let nombreF=prompt("teclea nombre de la nueva fruta");
// let preciof=prompt("teclea nuevo precio fruta");
// let stockf=prompt("teclea nuevo stock fruta");
// frutas.push({nombre:nombreF, precio:preciof, stock:stockf});
// console.log(frutas)
//productos cuyo precio está por encima de la media (5)
// 1. Calcular la media de precios con reduce


// 2. Filtrar los productos que están por encima de la media 
const encimaMedia=frutas.filter(fruta=>fruta.precio>mediaPrecio);
console.log("Frutas por encimas de" ,mediaPrecio,encimaMedia)

//productos cuyo stock está por debajo de la media
// 1. Calcular la media del stock con reduce
const mediaStock=totalStock/frutas.length;
const debajoMediaSt=frutas.filter(fruta=>fruta.stock<mediaStock)
console.log("debajo de la media:",mediaStock,debajoMediaSt)

// 2. Filtrar las frutas con stock por debajo de la media (148.5) filter


// nombre de frutas cuyo precio es mayor o igual a 5 euros (piña,fresa)  filter y map

const frutaCaras=frutas.filter(fruta=>fruta.precio>=5).map(fruta=>fruta.nombre);
console.log("Frutas mas caras" ,frutaCaras)
//frutas con stock entre 100 y 150 unidades , precio entre 4-6 euros
const frutasX = frutas
  .filter(fruta => fruta.precio >= 4)
  .filter(fruta => fruta.precio <= 6)
  .filter(fruta => fruta.stock >= 100)
  .filter(fruta => fruta.stock <= 150);

console.log(frutasX);
// Fruta más cara
let maximo = frutas[0];
frutas.forEach((item) => {
    if (item.precio > maximo.precio) {
        maximo = item;
    }
    console.log(maximo);  
});

// Frutas con más stock
let maximoStock = frutas[0];
frutas.forEach((item) => {
    if (item.stock > maximoStock.stock) {
        maximoStock = item;
    }
    console.log("Fruta con más Stock es", maximoStock);  // Muestra la fruta con más stock
});
