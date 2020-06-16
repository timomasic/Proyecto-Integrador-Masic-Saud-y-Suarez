window.addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)

    let loBuscado = queryString.get ("searchBar");
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + loBuscado + "")
    .then(
        function (respuesta){
            return respuesta.json();

        }
    )

    .then(
        function (resultado){

            let resultadoBusqueda = resultado.data
            console.log(resultado)

            for (let index = 5; index < resultadoBusqueda.length; index++) {
                const cadaResultado = resultadoBusqueda[index];
                
                let trackTitle = cadaResultado.title;
                let trackArtist = cadaResultado.artist.name;
                let trackAlbum = cadaResultado.album.title;
                let trackImage = cadaResultado.album.cover_big;
                let trackId = cadaResultado.index

                let htmlResultado =
                `
                <li>
                    <div class="slide">
                        <a href="detallecancion.html7iddeTrack=` + trackId + `">
                            <img class="imagencancion imgslide" src="` + trackImage + `" alt="">
                        </a>
                        <div class="uk-position-bottom-center uk-panel">
                            <h3 class="textoslide">` + trackTitle + ' / ' + trackArtist + `</h3>
                        </div>
                </li>
                `

                document.querySelector(".listadoResultados").innerHTML += htmlResultado;
            }
        }
    )
})