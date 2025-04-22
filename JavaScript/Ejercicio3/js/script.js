window.onload = inicio;

function inicio() {
    var vectorLi = document.querySelectorAll(".elemento");
    let boton = document.querySelector("#cambiar");
    boton.addEventListener("click", function () {
        vectorLi.forEach((item) => {
           
            item.style.color = cargarColores();
        });
    });


}
function cargarColores() {
    let cadenaColores = "#";
    const posiblesColores = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']; 
    for (let i = 0; i < 6; i++) {
        cadenaColores += posiblesColores[Math.floor(Math.random() * 16)];
    }
    return cadenaColores;
}