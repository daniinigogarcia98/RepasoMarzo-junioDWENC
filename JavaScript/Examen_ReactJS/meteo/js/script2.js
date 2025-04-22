const url="json/meteo.json";
fetch(url)
    .then(response => response.json())
    .then(contenido=>mostrar(contenido));
    function mostrar(contenido){
        const div=document.createElement("div");
        div.className="container";
        document.body.appendChild(div);
        const tablaMeteo=document.createElement("table");
        tablaMeteo.border="1px solid black";
        div.appendChild(tablaMeteo);
        const cabecera=document.createElement("thead");
        tablaMeteo.appendChild(cabecera);
        const cabecera1=document.createElement("td");
        cabecera1.textContent="ciudad";
        cabecera.appendChild(cabecera1);
        const cabecera2=document.createElement("td");
        cabecera2.textContent="lluvia";
        cabecera.appendChild(cabecera2);
        const cabecera3=document.createElement("td");
        cabecera3.textContent="Temp Max";
        cabecera.appendChild(cabecera3);
        const cabecera4=document.createElement("td");
        cabecera4.textContent="Temp Min";
        cabecera.appendChild(cabecera4);
        let totalLluvia=0;
        let totalTempMax=0;
        let totalTempMin=0;
        let ciudadMaxLluvia=contenido[0];
        let ciudadMaxTemp=contenido[0];
        let ciudadMinTemp=contenido[0];
        contenido.forEach((item,indice)=>{
            const nuevaFila=document.createElement("tr");
            tablaMeteo.appendChild(nuevaFila);
            const nuevoNombre=document.createElement("td");
            nuevoNombre.textContent=item.nombreCiudad;
            nuevaFila.appendChild(nuevoNombre);
            const nuevaLluvia=document.createElement("td");
            nuevaLluvia.textContent=item.litrosLluvia;
            nuevaFila.appendChild(nuevaLluvia);
            const nuevaTemMax=document.createElement("td");
            nuevaTemMax.textContent=item.temperaturaMax;
            nuevaFila.appendChild(nuevaTemMax);
            const nuevaTemMin=document.createElement("td");
            nuevaTemMin.textContent=item.temperaturaMin;
            nuevaFila.appendChild(nuevaTemMin);
            //media
            totalLluvia +=item.litrosLluvia;
            totalTempMax +=item.temperaturaMax;
            totalTempMin +=item.temperaturaMin;
            if (item.litrosLluvia > ciudadMaxLluvia.litrosLluvia) {
                ciudadMaxLluvia = item;
            }
            if (item.temperaturaMax > ciudadMaxTemp.temperaturaMax) {
                ciudadMaxTemp = item;
            }
            if (item.temperaturaMin < ciudadMinTemp.temperaturaMin) {
                ciudadMinTemp = item;
            }
        });
        let mediaLluvia=totalLluvia/contenido.length;
        let HLluvia=document.createElement("h1");
        HLluvia.style.color="gray";
        HLluvia.textContent="Media Lluvia" +mediaLluvia.toFixed(2);
        div.appendChild(HLluvia);

        let mediaTmax=totalTempMax/contenido.length;
        let HTmax=document.createElement("h1");
        HTmax.style.color="red";
        HTmax.textContent="Media TempMax" +totalTempMax.toFixed(2);
        div.appendChild(HTmax);
        let mediaTmin=totalTempMin/contenido.length;
        let HTmin=document.createElement("h1");
        HTmin.style.color="lightblue";
        HTmin.textContent="Media TempMax" +totalTempMin.toFixed(2);
   
    let HLluviaMaxima = document.createElement("h3");
    HLluviaMaxima.textContent = "Ciudad más lluviosa: " +ciudadMaxLluvia.nombreCiudad+ " con " + ciudadMaxLluvia.litrosLluvia + " litros de lluvia.";
    div.appendChild(HLluviaMaxima);

    let HTempMaxima = document.createElement("h3");
    HTempMaxima.textContent = "Ciudad con Temp Max más alta: " +ciudadMaxTemp.nombreCiudad+" con " + ciudadMaxTemp.temperaturaMax + " °C.";
    div.appendChild(HTempMaxima);

    let HTempMinima = document.createElement("h3");
    HTempMinima.textContent = "Ciudad con Temp Min más baja: " + ciudadMinTemp.nombreCiudad + " con " + ciudadMinTemp.temperaturaMin + " °C.";
    div.appendChild(HTempMinima);
    }