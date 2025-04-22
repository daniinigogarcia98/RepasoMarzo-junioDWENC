window.onload=inicio;
function inicio(){
    //identificacion de componentes html
    let boton1=document.querySelector("#cambiar");
    //let boton1=document.getElementById("cambiar");
    let boton2=document.querySelector("#retornar");
    let texto=document.querySelector("#texto");
    //Generar eventos
    //con addEventListener
   /* boton1.addEventListener("click",function(){
       texto.textContent="Activando el evento cambio de Texto"; 
    });
    boton2.addEventListener("click",function(){
        texto.textContent="Hola Mundo"; 
     });*/
     //con funcion anonima
     boton1.onclick=()=>{
        texto.textContent="Activando el evento cambio de Texto onclick"; 
     };
     boton2.onclick=()=>{
        texto.textContent="Hola Mundo"; 
     };
}