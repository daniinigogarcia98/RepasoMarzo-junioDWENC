fetch("basket.csv")
    .then(respuesta => respuesta.text())
    .then((datos) => MostarDatos(datos));

function MostarDatos(datos) {
    const lineas = datos.trim().split("\n");
    const cabecera = lineas[0].split(",")
    //el map es para quitar _ la barra baja y sustituirla por espacio en este caso
    //usamos " " para interpretar el espacio
    .map(linea => linea.replace(/_/g, " "));
    const Nuevatabla = document.createElement("table");
    Nuevatabla.border = "1px solid black";
    Nuevatabla.style.borderCollapse = "collapse";
    Nuevatabla.style.fontSize = "20px";
    document.body.appendChild(Nuevatabla);
    const NuevaCabecera = document.createElement("thead");
    cabecera.forEach(head => {
        const Nuevoth = document.createElement("th");
        Nuevoth.textContent = head;
        Nuevoth.style.backgroundColor = "lightgray";
        NuevaCabecera.appendChild(Nuevoth);
    });
    Nuevatabla.appendChild(NuevaCabecera);

    let maxPuntos = 0;
    let maxJugadores = [];
    let maxRebotes = 0;
    let maxRebotejugadores = [];
    let puntosTotalesEquipo = 0;
    let RebotesTotalesEquipo = 0;
    lineas.forEach((item, indice) => {
        if (indice > 0) {

            const jugadores = item.split(",");
            const nuevotr = document.createElement("tr");

            jugadores.forEach(campo => {
                const nuevotd = document.createElement("td");
                nuevotd.textContent = campo;
                nuevotr.appendChild(nuevotd);
            });

            Nuevatabla.appendChild(nuevotr);
            //b)Mostrar en un h3 el jugador con más puntos conseguidos 
            //(suma de puntos1,puntos2,puntos3)
            //esto es lo mismo que sumar 4+12×2+3×3=37
            //si lo descompusieramos seria primero:
            //Multiplicaiones
            //12*2=24
            //3*3=9
            //luego las sumas
            //4+24=28+9=37
            const puntos = parseInt(jugadores[2]) + parseInt(jugadores[3]) * 2 + parseInt(jugadores[4]) * 3;
            if (puntos > maxPuntos) {
                maxPuntos = puntos;
                maxJugadores = [jugadores[0]];
            }

            //c)Mostrar en un h3 Jugador con más rebotes 
            // (rebotes ofensivos+rebote defensivos)
            //sumamos los valores que estan en jugador[6]+Jugador[7]
            const rebotes = parseInt(jugadores[6]) + parseInt(jugadores[7]);
            //si el total de la suma es mayor muestro el jugador con mas rebotes
            if (rebotes > maxRebotes) {
                maxRebotes = rebotes;
                maxRebotejugadores = [jugadores[0]];
            }
            //d)Mostrar en un h3 Puntos totales del equipo
            puntosTotalesEquipo += puntos;
            //e)Mostrar en un h3 Rebotes totales del equipo
            RebotesTotalesEquipo += rebotes;
        }
    });

    const jugadormaspuntos = document.createElement("h3");
    jugadormaspuntos.innerHTML = 'Jugador Con Más Puntos: <span style="color: green;">' + maxJugadores + '</span> con (' + maxPuntos + ' puntos)';
    document.body.appendChild(jugadormaspuntos);
    const jugadormasRebotes = document.createElement("h3");
    jugadormasRebotes.innerHTML = 'Jugador Con Más Rebotes: <span style="color: green;">' + maxRebotejugadores + '</span> (' + maxRebotes + ' rebotes)';
    document.body.appendChild(jugadormasRebotes);
    const TotalPuntosEquipo = document.createElement("h3");
    TotalPuntosEquipo.innerHTML = 'Puntos Totales del Equipo: <span style="color: green;">' + puntosTotalesEquipo + '</span> ';
    document.body.appendChild(TotalPuntosEquipo);
    const TotalRebotesEquipo = document.createElement("h3");
    TotalRebotesEquipo.innerHTML = 'Rebotes Totales del Equipo: <span style="color: green;">' + RebotesTotalesEquipo + '</span> ';
    document.body.appendChild(TotalRebotesEquipo)
};
