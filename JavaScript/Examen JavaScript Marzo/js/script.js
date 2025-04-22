//EXJS P2
const imagenes = [];
const rutasImagenes = "https://randomuser.me/api/portraits/lego/";

// Pedir por teclado las dimensiones de la pantalla de juego;
let filas = parseInt(prompt("Teclea el número de filas"));
let columnas = parseInt(prompt("Teclea el número de columnas"));

const totalImagenes = filas * columnas;

// Antes de montar la interfaz, monto el array de imágenes
for (let i = 0; i < totalImagenes; i++) {
    imagenes.push(rutasImagenes + Math.floor(Math.random() * 9) + ".jpg");
}

// Interfaz gráfica
const tablaImagenes = document.createElement("table");
tablaImagenes.setAttribute("id", "tablaImg");
tablaImagenes.style.border = "1px solid black";
tablaImagenes.style.borderCollapse = "collapse";
document.body.appendChild(tablaImagenes);

// Construir filas y columnas de la tabla original
let indice = 0;
for (let f = 0; f < filas; f++) {
    let nuevaFila = document.createElement("tr");
    tablaImagenes.appendChild(nuevaFila);
    for (let c = 0; c < columnas; c++) {
        let nuevaCelda = document.createElement("td");
        nuevaFila.appendChild(nuevaCelda);
        let nuevaImg = document.createElement("img");
        nuevaImg.src = imagenes[indice];
        indice++;
        nuevaImg.width = "100";
        nuevaCelda.appendChild(nuevaImg);
        nuevaImg.addEventListener("click", () => {
            eliminar(nuevaImg, f, c); // Pasamos la posición de la imagen
        });
    }
}

// Crear nueva tabla para las imágenes movidas
const nuevaTabla = document.createElement("table");
nuevaTabla.style.border = "1px solid black";
nuevaTabla.style.borderCollapse = "collapse";
document.body.appendChild(nuevaTabla);

// Construir filas y columnas para la nueva tabla (igual que la original)
for (let f = 0; f < filas; f++) {
    let nuevaFila = document.createElement("tr");
    nuevaTabla.appendChild(nuevaFila);
    for (let c = 0; c < columnas; c++) {
        let nuevaCelda = document.createElement("td");
        nuevaFila.appendChild(nuevaCelda);
    }
}

function eliminar(nuevaImg, fila, columna) {
    const totalImg = document.querySelectorAll("#tablaImg img");
    for (let i = 0; i < totalImg.length; i++) {
        if (totalImg[i].src === nuevaImg.src) {
            // Eliminar la imagen de la tabla original
            totalImg[i].style.visibility = "hidden";

            // Obtener la celda correspondiente en la nueva tabla (misma fila y columna)
            let nuevaCelda = nuevaTabla.rows[fila].cells[columna];

            // Mover la imagen a la nueva celda
            nuevaCelda.appendChild(totalImg[i]);

            // Hacer visible la imagen en la nueva tabla
            totalImg[i].style.visibility = "visible";
        }
    }
}
