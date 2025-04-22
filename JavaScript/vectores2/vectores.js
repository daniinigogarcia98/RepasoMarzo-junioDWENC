window.addEventListener("DOMContentLoaded", inicio);

function inicio() {
  const vector1 = [2, 5, 2, 4, 6, 8, 9, 6];
  const vector2 = ["paco", "lola", "pedro"];
  const vector3 = [
    {
      titulo: 'Los lunes al sol',
      minutos: 120
    },
    {
      titulo: 'La delgada línea roja',
      minutos: 120
    },
    {
      titulo: "Bienvenido MrMarsall",
      minutos: 93
    }
  ]
  const vector4=[
    {
      nombre: 'Lucía mártinez',
      edad: 18
    },
    {
      nombre: 'Miguel Angel Gutierrez',
      edad: 17
    },
    {
      nombre: 'José Miguel López',
      edad: 62
    }
  ]
//.........................
  function aniadirNumero() {
    console.log("Vector Original (Vector1):" ,vector1);
    vector1.push(10, 13);
    console.log("Vector Moficado (Vector1)",vector1);
  }

  const bntNumero = document.getElementById("btnaniadirN");
  bntNumero.addEventListener("click", aniadirNumero);
//.........................
  function aniadirNombre() {
    console.log("Vector Original (Vector2):" ,vector2);
    vector2.push("angela", "álvaro");
    console.log("Vector Moficado (Vector2)",vector2);
  }
  const bntNombre = document.getElementById("btnaniadirB");
  bntNombre.addEventListener("click", aniadirNombre);
//.........................
function aniadirPelicula() {
 //Hacemos una copia del vector original en memoria para que no salga 
 //el resultado final al proncipio pouesto que este es el vector original 
 //y quiero mostrarlo sin alteracionres para comparar de como es original
 //mente y como es el resultado
  console.log("Vector Original (Vector3):", [...vector3]);
  vector3.push({
    titulo: 'the Fast & Furious (A todo Gas)',
    minutos: 140
  });
  vector3.push({
    titulo: 'I am Legend (Soy leyenda)',
    minutos: 141
  });

  console.log("Vector Modificado (Vector3):", vector3);
}

  const bntPelicula = document.getElementById("btnaniadirP");
  bntPelicula.addEventListener("click", aniadirPelicula);
//.........................
  function eliminarN(){
    console.log("Vector1 original" ,vector1);
    vector1.pop()
    console.log("vector1 Modificado:" ,vector1);
  }
  const btnEliminarN=document.getElementById("btnEliminarN");
  btnEliminarN.addEventListener("click",eliminarN);
//..........................

  function aniadirPrincipio(){
    console.log("Original" ,vector1);
    vector1.unshift(1,3);
    console.log("Modificado",vector1);
  }
  const btnAniadirU=document.getElementById("btnAniadirU");
  btnAniadirU.addEventListener("click",aniadirPrincipio);
//............................
  function eliminarPrincipio(){
    console.log("Vector 2 Original" ,vector2);
    const primerElemento=vector2.shift();
    console.log("Elemento borrado de vector2: ",primerElemento);
    console.log("Vector2 Tras borrado de 1er Elemento",vector2)
  }
  const btnEliminarS=document.getElementById("btnEliminarS");
  btnEliminarS.addEventListener("click",eliminarPrincipio);
//............................
  function copiarVector(){
    console.log("Original",vector1)
    const nuevoVector1=vector1.slice(2,6)
    console.log("Nuevo Vector1",nuevoVector1)
  }
  const btnSlice=document.getElementById("btnSlice");
  btnSlice.addEventListener("click",copiarVector);
//.........................
  function separadorJoin(){
    console.log("Vector2 Original",vector2);
    const cadena=vector2.join(';')
    console.log("Vector 2 con join Aplicado: ",cadena)
  }
  const btnJoin=document.getElementById("btnJoin");
  btnJoin.addEventListener("click",separadorJoin);

  function encontrar(){
    console.log("Vector 2 Original:", vector2);
    if (vector2.includes("pedro")) {
      console.log("El nombre 'pedro' está en la lista:", "pedro");
    } else {
      console.log("El nombre 'pedro' no existe en la lista");
    }
  }
  const btnIncludes=document.getElementById("btnIncludes");
  btnIncludes.addEventListener("click",encontrar);

  function ordenar(){
    console.log("Vector1 Original: " ,vector1);
    const vectorCopia=vector1.slice().sort((a, b)=> a -b );
    console.log("Vector1 Copia con Sort",vectorCopia)
  }
  const btnSort=document.getElementById("btnSort");
  btnSort.addEventListener("click",ordenar);

  function ordenarInverso(){
    console.log("Vector1 Original: " ,vector1);
    const vectorCopia=vector1.slice().sort().reverse();
    console.log("Vector1 Copia con Revese",vectorCopia)
  }
  const btnReverse=document.getElementById("btnReverse");
  btnReverse.addEventListener("click",ordenarInverso);

  function mapeo(){
    console.log("Vector 3 Original",vector3);
    const vector3min = vector3.map(peli => 
      {
       if (peli.minutos < 100) 
         { return peli; 

         }
         //establecemos que undifined es vacio ya que descartamos el resto
         //del array
         else{
          return undefined={};
         }
      })
    console.log("Resultado de Map: " ,vector3min);
  }
  const btnMap=document.getElementById("btnMap");
  btnMap.addEventListener("click",mapeo);

  function reducir(){
    console.log("Vector 1 Original" ,vector1);
    const totalVector=vector1.reduce((suma,item)=>suma+item,0);
    console.log("Resultado Total del Vector1",totalVector)
  }
  const btnReduce=document.getElementById("btnReduce");
  btnReduce.addEventListener("click",reducir);

  function filtrar(){
    console.log("Vector 3 Original",vector3);
    const vector3min=vector3.filter(min=>min.minutos > 100);
    console.log("Resultado Vector3 Filter",vector3min);
  }
  const btnFilter=document.getElementById("btnFilter");
  btnFilter.addEventListener("click",filtrar);

  function par() {
  console.log("Vector 1 Original:", vector1);
  const numeroPar = vector1.some(num => num % 2 === 0);
  
  if (numeroPar) {
    //usamos filter para filtrar los pares
    const numerosPares = vector1.filter(num => num % 2 === 0);
    console.log("Sí hay números pares",numerosPares);
  } else {
    console.log("No hay números pares");
  }
}

const btnSome = document.getElementById("btnSome");
btnSome.addEventListener("click", par);

function mayormenorEdad() {
  console.log("Vector 4 Original:", vector4);
  if (vector4.every(edad => edad >= 18)) {
    console.log("Todos son mayores de edad:", vector4);
  } else {
    console.log("No todos son mayores de edad:", vector4.filter(edad=>edad.edad=='17'));
  }
}

const btnEvery = document.getElementById("btnEvery");
btnEvery.addEventListener("click", mayormenorEdad);

function buscar() {
  console.log("Vector 3 Original:", vector3);

  const pelimenorduracion = vector3.find(min => min.minutos < 100);

  if (pelimenorduracion) {
    console.log("La película que dura menos es:",
      pelimenorduracion.titulo,
      "con duración de:",
      pelimenorduracion.minutos,
      "minutos"
    );
  } else {
    console.log("No existe la película con esas características");
  }
}

const btnFind = document.getElementById("btnFind");
btnFind.addEventListener("click", buscar);

function identificadores() {
  console.log("Vector 4 Original:", vector4);
  //ponemos el id del objeto a identificar si no nos devolvera 
  //Arrays > [{0 ,1 ,2}] en lugar de Arrays > [{nombre , edad }] ya que 
  // quiero mostrar estos dos ultimos nombre y edad
  const claves = Object.keys(vector4[1]);
  console.log(claves)
}

const btnKeys = document.getElementById("btnKeys");
btnKeys.addEventListener("click", identificadores);

function valores() {
  console.log("Vector 4 Original:", vector4);
  vector4.forEach(function(persona) {
    var valores = Object.values(persona); // ['nombre', edad]
   console.log("Los Valores del Array son: " +"\n"+"Nombre: " + valores[0] + ", Edad: " + valores[1] +"") ;
  });
}

const btnValues = document.getElementById("btnValues");
btnValues.addEventListener("click", valores);

function entrada(){
  console.log("Vector 3 Original",vector3);
  
console.log("Vector 3 con entradas de objetos:",Object.entries(vector3));
}
const btnEntry = document.getElementById("btnEntry");
btnEntry.addEventListener("click", entrada);

}
