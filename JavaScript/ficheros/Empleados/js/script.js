fetch("empleados.csv")
    .then((response) => response.text())
    .then((data) => mostrar(data));

function mostrar(data) {
    const tabla = document.createElement("table");
    // tabla.border = "1px solid red";
    tabla.style.borderCollapse = "collapse";
    document.body.appendChild(tabla);
    //Separar el contenido del csv en filas
    let filas = data.split("\n");
    //crear las cabeceras de la tabla
    let cabecera = filas[0];
    let elementosCabecera = cabecera.split(",");

    const filaCabecera = document.createElement("thead");
    tabla.appendChild(filaCabecera);
    // Estilo para la cabecera
    elementosCabecera.forEach((item) => {
        const th = document.createElement("th");
        th.textContent = item;
        //Definimos el estilo para el th
        //letra en negrita,fondo gris,separamos en 8px
        //y alineamos en el centro
        th.style.fontWeight = "bold";
        th.style.color = "blue";
        th.style.backgroundColor = "#D3D3D3";
        th.style.padding = "8px";
        th.style.textAlign="start";
        filaCabecera.appendChild(th);
    });
    // Crear la tabla
    const cuerpoTabla = document.createElement("tbody");
    tabla.appendChild(cuerpoTabla);

    // Iteramos sobre las filas de datos
    filas.forEach((item, indice) => {
        if (indice > 0) {
            const tr = document.createElement("tr");
            cuerpoTabla.appendChild(tr);
            // Alternamos colores de fondo
            if ((indice - 1) % 2 === 0) {
                tr.style.backgroundColor = "#FFFF00";
            } else {
                tr.style.backgroundColor = "#00FF00";
            }

            let elementos = item.split(",");
            elementos.forEach((miniItem, indicetd) => {
                const td = document.createElement("td");
                tr.appendChild(td);
                td.textContent = miniItem;
                // Resaltamos salarios mayores a 100,000
                if (indicetd === 3) { 
                    // Índice 3 corresponde al salario
                    const salario = parseFloat(miniItem);
                    if (salario > 100000) {
                        td.style.color = "red"; 
                        td.style.fontWeight = "bold";
                    }
                }
                // Resaltamos edades mayores a 50
                if (indicetd === 1) {
                    // Índice 1 corresponde a la edad
                    const edad = parseInt(miniItem);
                    //si es mayor o igual  50 Pintamos en rojo la edad
                    if (edad > 50) {
                        td.style.color = "red";
                        td.style.fontWeight = "bold";
                    } else {
                        //si no es mayor o igual a 50 pintamos en azul
                        td.style.color = "blue";
                        td.style.fontWeight = "bold";
                    }
                }

                td.style.padding = "8px"; 
            })
        }
    })
}
