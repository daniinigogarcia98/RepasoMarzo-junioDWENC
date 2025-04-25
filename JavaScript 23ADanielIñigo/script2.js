
fetch("paises.json")
  .then(respuesta => respuesta.json())
  .then(datos => mostrarDatos(datos));
  function mostrarDatos(datos){
    //apartado a)
    // const continente=prompt("teclea Continente(Asia,América,Europa,Oceania,África)");
    // const vectorC=datos.filter(NombreC=>NombreC.Continente==continente).sort((a,b)=b.Población-a.Población);
    // console.log(vectorC);
    //apartado b)
    // const vectorCOrdenado=datos.sort((a,b)=>a.Continente.localeCompare(b.Continente)).map(nombre=>nombre.Pais);
    // console.log(vectorCOrdenado);
    //apartado c)
    // const cpVector=datos.slice();
    // const vectormasPoblacion=cpVector.sort((a,b)=>b.Población-a.Población).slice(0,10);
    // for(let i=0;i<10;i++){
    //   console.log(vectormasPoblacion[i])

    // }
    // console.log(vectormasPoblacion)
    const cpVector=datos.slice()
    // const PAmerica=cpVector.filter(c=>c.Continente=="América");
    // console.log(PAmerica);
    // var sumaP=0
    // PAmerica.forEach(item => {
    //   sumaP+=item.Población;
    // });
    // const mediaP=sumaP/PAmerica.length;
    // console.log(mediaP.toFixed(2));
    // const NombrePais=prompt("Teclea nombre de País");
    // const objetoP=cpVector.find(x=>x.Pais==NombrePais);
    // console.log(objetoP);

    const pMundial=cpVector.reduce((acum,pais)=>acum+pais.Población,0);
    console.log(pMundial);
    const sMuldial=cpVector.reduce((acum,pais)=>acum+pais.Superficie,0);
    console.log(sMuldial);
    //pais mas poblacion

    const PMasPoblacion=cpVector.sort((a,b)=>b.Población-a.Población);
    console.log(PMasPoblacion[0])
    //pais menos poblacion
    const PMenosPoblacion=cpVector.sort((a,b)=>a.Población-b.Población);
    console.log(PMenosPoblacion[0])
  }