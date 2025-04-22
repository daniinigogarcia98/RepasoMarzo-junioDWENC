//a)Crear un párrafo con el texto “Párrafo creado dinámicamente”
//Selecciono el body para mostrar los elementos dinamicamente
let cuerpo=document.querySelector('body');
//creo un parrafo con createElemente
let parrafo=document.createElement('p');
//pongo el texto que debe aparecer en el parrafo
parrafo.textContent="Párrafo creado dinámicamente en JS";
//pinto el parrafo en el DOM con appenchild y uso cuerpo en lugar de document.body
//es mas abreviado
cuerpo.appendChild(parrafo);
//creo un salto de linea
let saltoLinea=document.createElement('br');
//lo pinto en DOM
cuerpo.appendChild(saltoLinea);
//b)Al pulsar botón mostrar mensaje de alert
//creamos un boton
const botonAlerta=document.createElement("button");
//añadimos el texto que debe tener
botonAlerta.textContent="!Pulsa Aqui¡";
//pintamos el boton en el DOM
cuerpo.appendChild(botonAlerta);
//creamos un evento clic en el boton para que me lanze un alert
//ojo si en visual studio code tienes live preview no te va a funcionar 
//lanza live server
botonAlerta.onclick=()=>{
    alert("Has pulsado el boton ");
    parrafo.textContent+=" Has pulsado el boton";
 };
 //agrego salto de linea
 let saltoLinea2=document.createElement('br');
 cuerpo.appendChild(saltoLinea2);
 //c) div con estilo
 let saltoLinea3=document.createElement('br');
 cuerpo.appendChild(saltoLinea3);
 //creo el elemento div
 let caja=document.createElement('div');
 //añado un texto
 caja.textContent="div con estilo";
 //le añado un color para identificarlo
 caja.style.backgroundColor="lightblue";
 //le añado anchura
 caja.style.width="200px"
 //le añado altura
 caja.style.height="200px";
 //y otras propiedades como flex,tipo de letra y tamaño ademes de centrarlo
 caja.style.display="flex";
 caja.style.justifyContent="center";
 caja.style.alignItems="center";
 caja.style.fontFamily="arial";
 caja.style.fontSize="22px";
 cuerpo.appendChild(caja);
 //d) listado items ubicados en un array
 //definimos el array con los eloementos que quiero mostrar
 const vectorItem=['Item1','Item2','Item3'];
 //definir la lista
 const lista=document.createElement('ul');
 vectorItem.forEach((item,indice)=>{
   //crear cada elemento de la lista(li)
    const listaItems=document.createElement('li');
    //contenido de cada item de la lista(li dentro de ul)
    listaItems.textContent=item;
    //incorporar al cuerpo lista(ul) elementos(li)
    lista.appendChild(listaItems);
 });
 //añadir la lista al cuerpo(body)
cuerpo.appendChild(lista);
// Función para generar una URL de imagen aleatoria
function obtenerUrlImagenAleatoria() {
   // Generar un número aleatorio entre 0 y 99
   const id = Math.floor(Math.random() * 100);
   // Elegir aleatoriamente entre hombres o mujeres
   const genero = Math.random() > 0.5 ? 'men' : 'women'; // Ajustado para que seleccione aleatoriamente
   // Construir la URL usando el ID aleatorio y el género
   return `https://randomuser.me/api/portraits/${genero}/${id}.jpg`;
}

// Obtener una URL de imagen aleatoria
const urlImagen = obtenerUrlImagenAleatoria();

// Crear un elemento de imagen para la galería
const galeria = document.createElement('img');
galeria.src = urlImagen;
galeria.alt = 'Imagen Aleatoria';
galeria.style.width = '200px';
galeria.style.marginBottom = '10px'; 

// Crear el enlace
const link = document.createElement('a');
link.href = urlImagen;
link.textContent = 'Imágenes Random';
link.target = '_blank'; 
link.style.display = 'block';

// Cambiar la imagen cuando el mouse pasa por encima
galeria.addEventListener("mouseover", function() {
    galeria.src = obtenerUrlImagenAleatoria();
});

// Añadir la imagen y el enlace al body
document.body.appendChild(galeria);
document.body.appendChild(link);
//f)Tabla con f filas y c columnas
const filas =parseInt(prompt("filas"))
const columnas = parseInt(prompt("columnas"))
// Crear la tabla
const tabla = document.createElement('table');
tabla.style.border = '1px solid black';
tabla.style.borderCollapse = 'collapse';

// Crear las filas y celdas
for (let i = 0; i < filas; i++) {
    const fila = document.createElement('tr');
    for (let j = 0; j < columnas; j++) {
        const celda = document.createElement('td');
        let contador=0
        celda.textContent = `Fila${i + 1}Columna${j + 1}`;
        contador ++;
        celda.style.border = '1px solid black';
        celda.style.padding = '8px';
        fila.appendChild(celda);
    }
    tabla.appendChild(fila);
}

// Añadir la tabla al body
document.body.appendChild(tabla);
//formulario
const formulario=document.createElement("form");
const texto=document.createElement("input");
const boton=document.createElement("button");
//diseño ,acciones
texto.type="text";
texto.placeholder="Teclea tu nombre";
boton.type="submit"
boton.textContent="Aceptar";
boton.addEventListener("click",()=>{
   alert("Tu nombre es:"+texto.value)
})
formulario.appendChild(texto);
formulario.appendChild(boton);
cuerpo.appendChild(formulario);
// Crear elementos
const elementoLI = document.createElement("input");
elementoLI.type = "text"; // Definir el tipo de input como texto
const btnadd = document.createElement("button");
btnadd.textContent = "Añadir Item";
const nuevaLista = document.createElement("ul");

// Función para añadir un item a la lista
btnadd.addEventListener("click", () => {
   const nuevoLI = document.createElement("li");
   nuevoLI.textContent = elementoLI.value; // Obtener el valor del input
   nuevaLista.appendChild(nuevoLI);
   elementoLI.value = ""; // Vaciar el campo de texto después de añadir el item
});

// Agregar los elementos al cuerpo del documento

cuerpo.appendChild(elementoLI);
cuerpo.appendChild(btnadd);
cuerpo.appendChild(nuevaLista);

