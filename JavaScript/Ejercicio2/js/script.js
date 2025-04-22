//identificar etiquetas o componetes del DOM (Document Object Model)
let botones = document.querySelectorAll("button");
var texto = document.querySelector("h1");
// botones[0].addEventListener("click", function() {
//     texto.textContent = "Cambio del Texto";
//     texto.style.background = "linear-gradient(to right, red, green ,blue)";
//     texto.style.backgroundClip = "text";
//     texto.style.color = "transparent";
// });
// botones[1].addEventListener("click",function(){
//     texto.textContent="Hola Mundo"
// });


botones.forEach((item, indice) => {
    item.addEventListener("click", function () {
        switch (indice) {
            case 0: 
            texto.textContent = "Cambio del Texto";
            texto.style.background = "linear-gradient(to right, red, green ,blue)";
            texto.style.backgroundClip = "text";
            texto.style.color = "transparent";
            alert("has cambiado a:"+texto.textContent)

            break;

            case 1: 
            texto.textContent="Hola Mundo"
            texto.style.background = "black";
            texto.style.backgroundClip = "text";
            texto.style.color = "transparent";
            alert("has Vuelto a poner:"+texto.textContent)

            break;
            case 2:
            let imagen = document.createElement("img");
            imagen.src = "imagen.jpg";
            imagen.alt = "Imagen de ejemplo";
            contenedor.innerHTML = "";
            contenedor.appendChild(imagen);

            break;

        }
    })

})