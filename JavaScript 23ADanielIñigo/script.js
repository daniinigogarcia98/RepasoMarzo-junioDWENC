fetch("Paises.csv")
.then(response=>response.text())
.then(data=>listadoPaises(data));

function listadoPaises(data){
  const tabla = document.createElement("table");
  tabla.border="1px";
  tabla.style.margin="0 auto";
  tabla.style.borderCollapse = "collapse";
  document.body.appendChild(tabla);
  // Separar el contenido del CSV en filas
  let filas = data.split("\n");

  // Crear las cabeceras de la tabla
  let cabecera = filas[0];
  let elementosCabecera = cabecera.split(";");

  const filaCabecera = document.createElement("thead");
  tabla.appendChild(filaCabecera);
 // Estilo para la cabecera
 elementosCabecera.forEach((item) => {
  const th = document.createElement("th");
  th.textContent = item;
  th.style.fontWeight = "bold";
  th.style.fontSize = "23px";
  th.style.color = "blue";
  th.style.padding = "8px";
  th.style.textAlign = "start";
  filaCabecera.appendChild(th);
});
 // Crear el cuerpo de la tabla
 const cuerpoTabla = document.createElement("tbody");
 tabla.appendChild(cuerpoTabla);
 filas.forEach((item, indice) => {
  if (indice > 0 && item.trim() !== ""){
    const tr = document.createElement("tr");
    cuerpoTabla.appendChild(tr);

    // Obtener los elementos de la fila
    let elementos = item.split(";");
    const poblacion = Number(elementos[3]);
    const superficie = Number(elementos[4]);
    elementos.forEach((miniItem, indicetd) => {
        const td = document.createElement("td");
        tr.appendChild(td);
        td.textContent = miniItem;
        td.style.padding = "8px";
        if (
          poblacion >= 1000000 && poblacion <= 10000000 &&
          superficie >= 500000 && superficie <= 1000000
        ) {
          tr.style.backgroundColor = "green";
        }
    });
}
 });
}