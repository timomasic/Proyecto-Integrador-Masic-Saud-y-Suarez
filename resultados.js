window.addEventListener("load", function () {
    this.location.search
    let niidea = location.search
    console.log(niidea)
    let queryString = new URLSearchParams(niidea)
    console.log(queryString)
    let loBuscado = queryString.get("buscador");
    console.log(loBuscado)
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + loBuscado + "")
        .then(
            function (respuesta) {
                return respuesta.json();

            }
        )

        .then(
            function (resultado) {
                let listadoResultados = document.querySelector(".listadoResultadosAlbums")
                console.log(listadoResultados);

                let resultadoBusqueda = resultado.data
                console.log(resultadoBusqueda)


                resultadoBusqueda.forEach(function (resultados) {
                    listadoResultados.innerHTML +=
                        `
                <li>
                    <a href="album.html?idalbum=` + resultados.album.id + `">
                        <img src="` + resultados.album.cover_medium + `"></img>
                        <h4>` + resultados.album.title + `</h4>
                    </a>
                </li>
                `
                });
            }

        )



    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=" + loBuscado)
        .then(
            function (respuesta) {
                return respuesta.json();

            }
        )
        .then(
            function (resultado) {
                let listadoResultados = document.querySelector(".listadoResultadosTracks")
                console.log(listadoResultados);

                let resultadoBusqueda = resultado.data
                console.log(resultadoBusqueda)


                resultadoBusqueda.forEach(function (resultados) {
                    listadoResultados.innerHTML +=
                        `
                <li>
                    <a href="tracks.html?id=` + resultados.id + `">
                        <img src="` + resultados.album.cover_medium + `"></img>
                        <h4>` + resultados.title + `</h4>
                    </a>
                </li>
                `
                });
            }

        )
        
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" + loBuscado)
        .then(
            function (respuesta) {
                return respuesta.json();

            }
        )
        .then(
            function (resultado) {
                let listadoResultados = document.querySelector(".listadoResultadosArtists")
                console.log(listadoResultados);

                let resultadoBusqueda = resultado.data
                console.log(resultadoBusqueda)


                resultadoBusqueda.forEach(function (resultados) {
                    listadoResultados.innerHTML +=
                        `
                <li>
                    <a href="artist.html?idartist=` + resultados.id + `">
                        <img src="` + resultados.picture_medium + `"></img>
                        <h4>` + resultados.name + `</h4>
                    </a>
                </li>
                `
                });
            }

        )
})