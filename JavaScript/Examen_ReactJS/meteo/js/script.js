const url="json/meteo.json";
fetch(url)
    .then(response => response.json())
    .then(meteoData => {
        function ciudadConMasLluvia() {
            let ciudadMasLluviosa = meteoData[0];

            meteoData.forEach(dato => {
                if (dato.litrosLluvia > ciudadMasLluviosa.litrosLluvia) {
                    ciudadMasLluviosa = dato;
                }
            });
            document.getElementById('c1').textContent = ""+ciudadMasLluviosa.nombreCiudad +" con "+ciudadMasLluviosa.litrosLluvia+" mm de lluvia";
        }

        function ciudadMasCalurosa() {
            let ciudadTempMax = meteoData[0];

            meteoData.forEach(dato => {
                if (dato.temperaturaMax > ciudadTempMax.temperaturaMax) {
                    ciudadTempMax = dato;
                }
            });
            document.getElementById('c2').textContent = ""+ciudadTempMax.nombreCiudad+ " con "+ ciudadTempMax.temperaturaMax+"°C de temperatura máxima";
        }

        function ciudadMasFria() {
            let ciudadTempMin = meteoData[0];

            meteoData.forEach(dato => {
                if (dato.temperaturaMin < ciudadTempMin.temperaturaMin) {
                    ciudadTempMin = dato;
                }
            });
            document.getElementById('c3').textContent ="" +ciudadTempMin.nombreCiudad +" con "+ciudadTempMin.temperaturaMin+" de temperatura mínima";
        }


        ciudadConMasLluvia();
        ciudadMasCalurosa();
        ciudadMasFria();
    })
