fetch("daw.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => mostrarDatos(datos));

function mostrarDatos(datos) {
    // Creamos la tabla
    const tabla = document.createElement("table");
    tabla.border = "1px solid black";
    tabla.style.borderCollapse = "collapse";
    document.body.appendChild(tabla);

    const cabecera = document.createElement("thead");
    tabla.appendChild(cabecera);

    const filaCabecera = document.createElement("tr");
    cabecera.appendChild(filaCabecera);

    const columna1 = document.createElement("th");
    columna1.textContent = "Nombre";
    columna1.style.padding = "5px";
    filaCabecera.appendChild(columna1);

    const columna2 = document.createElement("th");
    columna2.textContent = "¿Titula?";
    columna2.style.padding = "5px";
    filaCabecera.appendChild(columna2);

    const columna3 = document.createElement("th");
    columna3.textContent = "Nota Proyecto DAW";
    columna3.style.padding = "5px";
    filaCabecera.appendChild(columna3);

    const cuerpo = document.createElement("tbody");
    tabla.appendChild(cuerpo);

    const datosConvertidos = [];

    datos.forEach((alumno) => {
        const fila = document.createElement("tr");
        cuerpo.appendChild(fila);

        // Celda Nombre
        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = alumno.nombre;
        celdaNombre.style.padding = "5px";
        fila.appendChild(celdaNombre);

        // Celda Titula
        const celdaTitula = document.createElement("td");
        celdaTitula.textContent = comprobarSiTitula(alumno) ? "SI" : "NO";
        celdaTitula.style.padding = "5px";
        fila.appendChild(celdaTitula);

        // Celda Proyecto DAW
        const celdaProyecto = document.createElement("td");
        celdaProyecto.textContent = alumno["Proyecto DAW"];
        celdaProyecto.style.padding = "5px";

        if (alumno["Proyecto DAW"] == 10) {
            celdaProyecto.style.backgroundColor = "lightgreen";
        }

        fila.appendChild(celdaProyecto);
        // Convertimos los datos de cada alumno en un objeto con nombre y media
        const mediaAlumno = calcularMedia(alumno);
        datosConvertidos.push({ nombre: alumno.nombre, media: mediaAlumno.toFixed(2)});
    });

    // Mostrar los datos convertidos en consola
    console.log(datosConvertidos);
}
function comprobarSiTitula(alumno) {
    const identificador = Object.keys(alumno);
    const values = Object.values(alumno);
    
    let esTitulado = identificador.every((valor, indice) => {
      return valor === "nombre" || valor === "Proyecto DAW" || values[indice] >= 5;
    });
  
    return esTitulado;
  }

// Función para calcular la media 
function calcularMedia(alumno) {
    const keys = Object.keys(alumno);
    const valores = Object.values(alumno);
    const calificaciones = keys
        .filter((valor, indice) => valor !== "nombre" && valor !== "Proyecto DAW")
        .map((valor, indice) => valores[indice]);

    const calificacionesValidas = calificaciones.filter(nota => !isNaN(nota));

    if (calificacionesValidas.length === 0) {
        return 0;
    }

    // Calculamos la media de las calificaciones válidas
    const suma = calificacionesValidas.reduce((acumulado, valor) => acumulado + valor, 0);
    return suma / calificacionesValidas.length;
}
