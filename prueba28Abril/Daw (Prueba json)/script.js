// Cargamos el archivo JSON
fetch("daw.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => mostrarDatos(datos));

// Función principal para mostrar los datos
function mostrarDatos(datos) {
// Crea la tabla vacía
  const tabla =document.createElement('table');
  tabla.border = "1px";
  tabla.style.borderCollapse = "collapse";
// Crea el encabezado de la tabla
  const encabezado = document.createElement('tr');
  const titulos = ['Nombre', '¿Titula?', 'Proyecto DAW'];

  titulos.forEach((titulo) => {
    const th = document.createElement('th');
    th.textContent = titulo;
    th.style.padding = "5px";
    encabezado.appendChild(th);
  });
  tabla.appendChild(encabezado);
// Convierte la lista de alumnos en filas de tabla
  const filas =datos.map((alumno) => crearFilaAlumno(alumno));
  // Agrega un array de filas a la tabla
  // Crea una fila de tabla con los datos de un alumno
function crearFilaAlumno(alumno) {
    const fila = document.createElement('tr');
    const titula = comprobarSiTitula(alumno);
  
    const valores = [
      alumno.nombre,
      titula ? 'SI' : 'NO',
      alumno['Proyecto DAW']
    ];
  
    valores.forEach((valor, index) => {
      const td = document.createElement('td');
      td.textContent = valor;
      td.style.padding = "5px";
  
      // Pintar verde claro si el proyecto DAW es 10
      if (index === 2 && valor == 10) {
        td.style.backgroundColor = '#c8facc';
      }
  
      fila.appendChild(td);
    });
  
    return fila;
  }
  filas.forEach((fila) => {
    tabla.appendChild(fila);
  });

  document.body.appendChild(tabla);
}




// Determina si un alumno titula (todas las notas >= 5 excepto el nombre)
function comprobarSiTitula(alumno) {
  return Object.keys(alumno).every((key) => {
    return key === 'nombre' || alumno[key] >= 5;
  });
}
