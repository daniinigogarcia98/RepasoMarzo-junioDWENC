const boton = document.createElement("button");
boton.textContent = "Generar imágenes";
boton.style.backgroundColor = "lightblue";
boton.style.padding = "5px";
boton.style.margin = "0 auto";
boton.style.display = "block";
document.body.appendChild(boton);

// Contenedor de imágenes
const contenedor = document.createElement("div");
contenedor.style.margin = "0 auto";
contenedor.style.display = "flex";
contenedor.style.justifyContent = "center";
contenedor.style.flexWrap = "wrap";
contenedor.style.width = "50%";
contenedor.style.gap = "5px";
contenedor.style.border = "1px solid black";
document.body.appendChild(contenedor);

boton.addEventListener("click", () => {
    contenedor.innerHTML = "";
    let imagenes = [];
    for (let i = 0; i < 40; i++) {
        let numRandom = Math.floor(Math.random() * 20);
        let ficheroCompleto = "./img/" + numRandom + ".JPG";
        imagenes.push(ficheroCompleto);
    }

    imagenes.sort();

    imagenes.forEach((item, indice) => {
        const imagen = document.createElement("img");
        imagen.src = item;
        imagen.style.width = "100px";
        contenedor.appendChild(imagen);

        imagen.addEventListener("click", () => {
            const nombreArchivo = item.split(/[\\/]/).pop();
            alert("Nombre del fichero: " + nombreArchivo);
            mostrarRepeticiones(item, imagenes);
        });
    });
});

function mostrarRepeticiones(imagenSrc, imagenes) {
    let contadorR = 0;
    const nombreArchivo = imagenSrc.split(/[\\/]/).pop();
    imagenes.forEach((item) => {
        if (item === imagenSrc) {
            contadorR++;
        }
    });
    alert("Número de repeticiones de la imagen: " + nombreArchivo + " es: " + contadorR);
}
