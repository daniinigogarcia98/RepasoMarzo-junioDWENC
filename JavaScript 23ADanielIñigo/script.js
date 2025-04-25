fetch("Paises.csv")
.then(respuesta=>respuesta.text())
.then(datos=>mostrar(datos));

function mostrar(datos){
  const lineas=datos.split("\n");
  const cabecera=lineas[0].split(";")
  const NuevaTabla=document.createElement("table");
  NuevaTabla.border="1px";
  NuevaTabla.style.margin="0 auto";
  NuevaTabla.style.borderCollapse="collapse";
  document.body.appendChild(NuevaTabla);
  const NuevaCabecera=document.createElement("thead");
  cabecera.forEach(head=>{
    const nuevoTh=document.createElement("th");
    nuevoTh.textContent=head;
    NuevaCabecera.appendChild(nuevoTh);
  })
  NuevaTabla.appendChild(NuevaCabecera);
  var totalSuperficie=0;
  var paisesEuropa=0;
  lineas.forEach((item,indice)=>{
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