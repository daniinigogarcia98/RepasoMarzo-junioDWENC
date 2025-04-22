
fetch("cine.json")
  .then(respuesta => respuesta.json())
  .then(data => filtrosCine(data));

function filtrosCine(listadoCine) {
    //6. Título de la película que dura más minutos
    let vectorCineAux=listadoCine.slice()
    let peliculaMasLarga = vectorCineAux[0];

    vectorCineAux.forEach(item => {
      if (item.Minutos > peliculaMasLarga.Minutos) {
        peliculaMasLarga = item;
      }
    });
    
    console.log("La película más larga es: " + peliculaMasLarga.Título);
    
   let vectorCine=listadoCine.slice();
   const filtro1=vectorCine.filter(cine=>cine.Minutos<100).map(cine=>cine.Título);
   console.log(filtro1);
   //7 . Cuántas películas son del 2003.
   const película=vectorCine.filter(peli=>peli.Año=2003).map(peli=>peli.Título)
   console.log("Las peliculas del 2003 son" ,película)
   //8. Media de duración de las películas
   const filtroDuracion=vectorCine.reduce((acum,peli)=>acum+peli.Minutos,0);
   let MediaDuracion=filtroDuracion/vectorCine.length;
   console.log("LA media de duracion de las peliculas",MediaDuracion);
   //9. Títulos de películas que dirige "Director": "Steven Spielberg",
   const peliculaDirector=vectorCine.filter(peli=>peli.Director=="Steven Spielberg")
   console.log("Peliculas dirigidas por Steven Spielberg",peliculaDirector)
   //10. Película más antigua.
   let peliculaAntigua=listadoCine.slice();
   const peliculaMasAntigua=peliculaAntigua.sort((a, b) => a.anio - b.anio)[0].Título;
   console.log("La pelicula más antigua",peliculaMasAntigua);
  }

fetch("empleados.json")
  .then(respuesta => respuesta.json())
  .then(data => filtrosEmpleados(data));

function filtrosEmpleados(listadoEmpleados) {
    //1.nombre de los empleados menores de 30 años
    let vectorEmp=listadoEmpleados.slice();
    const menor30anios = vectorEmp
    .filter(empleado => empleado.Edad <= 30)
    .map(empleado => empleado.Nombre);
  console.log(menor30anios);

  //2 Media de edad de los empleados
  const filtro2=vectorEmp.reduce((acum,emp)=>acum+=emp.Edad,0);
  let MediaEdad=filtro2/vectorEmp.length;
  console.log(MediaEdad);
  //3. Nombre del Trabajador que más cobra
  let trabajadorMasCobra=vectorEmp[0];
  vectorEmp.forEach((item)=>{
    if (item.Salario>trabajadorMasCobra.Salario) {
        trabajadorMasCobra=item
    }
  })
  console.log(trabajadorMasCobra.Nombre);
  //listar trabajadores ordenados por salario
  vectorEmp.sort((a,b)=>a.Salario-b.Salario).reverse();
  console.log(vectorEmp);
  //ordenado alfabeticamente por nombre
  let vectorEmp2=vectorEmp.slice()
  vectorEmp2.sort((a,b)=>a.Nombre.localeCompare(b.Nombre));
  console.log(vectorEmp2);
  //5. Cuántos trabajan de Desarrollador Frontend
  let vectorEmp3=vectorEmp.slice()
const vectorF=vectorEmp3.filter(emp=>emp.Cargo=="Desarrollador Frontend");
console.log(vectorF)
}


