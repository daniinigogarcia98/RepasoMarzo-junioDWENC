let textoData=[];
var parrafoDeletreo=document.createElement("p");
fetch("texto.json")
.then(response=>response.json())
.then(data=>{
    textoData=data;
    comienzoTipear();
})

function comienzoTipear() {
    const div = document.createElement("div");
    textoData.forEach((item, indice) => {
       const h5Texto = document.createElement("h5");
      const h5Velocidad = document.createElement("h5");
      div.appendChild(h5Texto);
      div.appendChild(h5Velocidad);
      h5Texto.textContent = item.texto;
      h5Velocidad.textContent = item.velocidad;
       document.body.appendChild(div);
  
       let indiceParcial = 0;
      function tipear() {
         parrafoDeletreo.textContent += item.texto[indiceParcial];
        indiceParcial++;
        div.appendChild(parrafoDeletreo);
        if (indiceParcial === item.texto.length) {
          clearInterval(temporizador);
         }
      }
      const temporizador = setInterval(tipear, item.velocidad);
    });
}