fetch("Paises.csv")
.then(respuesta=>respuesta.text())
.then(datos=>mostrar(datos));

function mostrar(datos){
  //creo la constante de separacion de los campos
  const lineas=datos.split("\n");
  //declaro la constante que delimita los datos del csv ;
  //sin el el split saldrian todos los datos seguidos dentro 
  //de la tabla dato;dato;dato
  const cabecera=lineas[0].split(";")
  //creo la tabla dinámicamente
  const NuevaTabla=document.createElement("table");
  //le pongo un borde
  NuevaTabla.border="1px";
  //hago se este en el centro usando margin 0 auto
  NuevaTabla.style.margin="0 auto";
  //con collapse colapso la tabla le pongo lineas finas
  NuevaTabla.style.borderCollapse="collapse";
  //añado la tabla al padre (body)
  document.body.appendChild(NuevaTabla);
  //creo la cabacera de la tabla
  const NuevaCabecera=document.createElement("thead");
 //con este for each indico cuales son las primeras filas de la tabla 
 //en este caso la cabecera donde se indica pais,capital,continente
 //población y superficie
  cabecera.forEach(head=>{
    //creo las filas principales de la tabla th
    const nuevoTh=document.createElement("th");
    //añado el contenido que esta en cabecera 
    nuevoTh.textContent=head;
    //añado el th a la cabecera de la tabla
    NuevaCabecera.appendChild(nuevoTh);
  })
  //añado la cabecera a la tabla
  NuevaTabla.appendChild(NuevaCabecera);
  var totalSuperficie=0;
  var paisesEuropa=0;
  //este for each contiene todo los datos a pintar en la tabla
  lineas.forEach((item,indice)=>{
    //si no indico nada como indice>0 los campos pais,capital,continente
    //poblacion y superficie se repetiran y se pintara en la fila 
    //debajo de la cabecera
    if (indice>0){
      //cada linea del csv se corresponde con un tr
      const nuevoTR=document.createElement("tr");
      NuevaTabla.appendChild(nuevoTR);
      const pais=item.split(";");
      //la descomposición del tr con split devulve un array de 5 campos
      pais.forEach(campo=>{
        const poblacion=pais[3]
        const superficie=pais[4];
        const continente=pais[2];
        const nuevoTD=document.createElement("td");
        nuevoTD.textContent=campo;
        nuevoTR.appendChild(nuevoTD);
      //fin del foreach de columnas
      //condición de población y superficie
      console.log()
      /*a)color de fondo verde paises poblacion comprendida entre 1000000
      de habitantes y 10000000,ademas de una superficie entre 500000 km
      cuadrados y 1000000 km cuadrados
      */
         if (Number(poblacion)>1000000 && Number(poblacion)<100000000
         && Number(superficie)>500000 && Number(superficie)<1000000){
            nuevoTR.style.backgroundColor="green"
         }
         //paises de Europa poblacion>30000000 y superficie<500000
         if (continente=="Europa" && Number(poblacion)>30000000 && Number(superficie)<500000){
            nuevoTR.style.backgroundColor="yellow"
         }
         if (continente=="Asia" || continente==="America"){
            nuevoTD.style.backgroundColor="red"
         }
         if (continente=="Europa"){
            totalSuperficie+=Number(superficie);
            paisesEuropa++;
         }
       })
    }
    //fin del foreach de filas
  })
  const media=document.createElement("p")
  var mediaSupEuropa=(totalSuperficie/paisesEuropa);
  document.body.appendChild(media);
  media.style.backgroundColor="blue";
  media.style.color="white";
  media.textContent="La media de la superfice de Europa es:"+" "+mediaSupEuropa.toFixed(2);
}