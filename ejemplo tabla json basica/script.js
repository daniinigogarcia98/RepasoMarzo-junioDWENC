//Primero sacamos los datos del json a traves del fetch
fetch("coches.json")
    .then(respuesta => respuesta.json())
    .then(datos => mostrar(datos))

function mostrar(datos) {

    /*
        Despues tenemos que crear la tabla y insertarla al body 
        <tr>
            <td>
            <td>
        </tr>
     */
    
    const tabla = document.createElement("table")
    tabla.border = "1px solid black";
    tabla.style.borderCollapse="collapse";
    tabla.style.backgroundColor = "lightcoral";
    document.body.appendChild(tabla)

    //una vez creado la tabla hacemos la cabecera para nuestra tabla que seria la primera fila
    const cabecera = document.createElement("tr")
    cabecera.style.backgroundColor = "lightblue";
    tabla.appendChild(cabecera)

   
    const columna1 = document.createElement("td")
    columna1.textContent = "Color";
    cabecera.appendChild(columna1)

    const columna2 = document.createElement("td")
    columna2.textContent = "Marca";
    cabecera.appendChild(columna2)

    const columna3 = document.createElement("td")
    columna3.textContent = "Modelo";
    cabecera.appendChild(columna3)

    const columna4 = document.createElement("td")
    columna4.textContent = "Consumo";
    cabecera.appendChild(columna4)

    const columna5 = document.createElement("td")
    columna5.textContent = "Precio";
    cabecera.appendChild(columna5)

    const columna6 = document.createElement("td")
    columna6.textContent = "Kms";
    cabecera.appendChild(columna6)

    const columna7 = document.createElement("td")
    columna7.textContent = "Tipo de Motor";
    cabecera.appendChild(columna7)

    //una vez hecho la cabecera tenemos que recorrer los datos de fichero con un foreach y volcarlos

    datos.forEach((item, indice) => {
        const filaContenido = document.createElement("tr");
        tabla.appendChild(filaContenido);

        const nuevaColumna = document.createElement("td");
        nuevaColumna.textContent = item.color;
        filaContenido.appendChild(nuevaColumna)

        const nuevaColumna2 = document.createElement("td");
        nuevaColumna2.textContent = item.marca;
        filaContenido.appendChild(nuevaColumna2)

        const nuevaColumna3 = document.createElement("td");
        nuevaColumna3.textContent = item.modelo;
        filaContenido.appendChild(nuevaColumna3)

        const nuevaColumna4 = document.createElement("td");
        nuevaColumna4.textContent = item.consumo;
        filaContenido.appendChild(nuevaColumna4)

        const nuevaColumna5 = document.createElement("td");
        nuevaColumna5.textContent = item.precio;
        filaContenido.appendChild(nuevaColumna5)

        const nuevaColumna6 = document.createElement("td");
        nuevaColumna6.textContent = item.kms;
        filaContenido.appendChild(nuevaColumna6)

        const nuevaColumna7 = document.createElement("td");
        nuevaColumna7.textContent = item.tipoMotor;
        filaContenido.appendChild(nuevaColumna7)

    });


}