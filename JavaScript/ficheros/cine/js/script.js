fetch("peliculas.csv")
    .then((response) => response.text())
    .then((data) => mostrar(data));

function mostrar(data) {
    const tabla = document.createElement("table");
    tabla.border="0px";
    tabla.style.margin="0 auto";
    tabla.style.borderCollapse = "collapse";
    document.body.appendChild(tabla);

    // Separar el contenido del CSV en filas
    let filas = data.split("\n");

    // Crear las cabeceras de la tabla
    let cabecera = filas[0];
    let elementosCabecera = cabecera.split(",");

    const filaCabecera = document.createElement("thead");
    tabla.appendChild(filaCabecera);

    // Estilo para la cabecera
    elementosCabecera.forEach((item) => {
        const th = document.createElement("th");
        th.textContent = item;
        th.style.fontWeight = "bold";
        th.style.fontSize = "23px";
        th.style.color = "red";
        th.style.padding = "8px";
        th.style.textAlign = "start";
        filaCabecera.appendChild(th);
    });

    // Crear el cuerpo de la tabla
    const cuerpoTabla = document.createElement("tbody");
    tabla.appendChild(cuerpoTabla);

    // Iterar sobre las filas de datos
    filas.forEach((item, indice) => {
        if (indice > 0 && item.trim() !== ""){
            const tr = document.createElement("tr");
            cuerpoTabla.appendChild(tr);

            // Obtener los elementos de la fila
            let elementos = item.split(",");
            let anio=false;
            let duracion=false;
            elementos.forEach((miniItem, indicetd) => {
                const td = document.createElement("td");
                tr.appendChild(td);
                td.textContent = miniItem;
                td.style.padding = "8px";
                if (Number(miniItem)>= 2000 && indicetd==4) {
                    tr.style.backgroundColor = "lightcoral";
                    anio=true;
                } else if (Number(miniItem)<= 2000 && indicetd==4) {
                    tr.style.backgroundColor = "green";
                    anio=true;
                }
                if(Number(miniItem)>150 && indicetd==5){
                    td.style.backgroundColor="yellow";
                    duracion=true;
                }
                if(anio==true && duracion==true){
                    tr.style.backgroundColor="blue";
                    anio=false;
                    duracion=false;
                }
            });
        }
    });
}