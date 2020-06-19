window.addEventListener("load", function () {

    let queryString = new URLSearchParams(location.search);

    let numeroArtista = queryString.get("idartist");
    console.log(numeroArtista);
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + numeroArtista)
        .then(function (respuesta) {
            return respuesta.json()
        })

        .then(function (information) {

            let artistas = information

            console.log(artistas);

            let nombre = information.name
            let imagen = information.picture_xl
            let fans = information.nb_fan
            let topTrack = information.tracklist


            document.querySelector(".artistName").innerHTML += `<img  id="foto-artista" src="` + imagen + `" alt="foto de` + " " + nombre + `"></li>`

            document.querySelector("#detalle").innerHTML += `
            <div class="contenedor">
            <li><b class="error-desktop">` + nombre + `</b></li>
            <li class="boton">
                <button class="button" type="button">
                Follow</button>
            </li>
            <li class="fans">` + (fans) + " " + `fans</li>
            </div>
            `


            fetch("https://cors-anywhere.herokuapp.com/" + topTrack)

            .then(function(respuesta) {
                return respuesta.json()
            })
        
            .then(function(information) {
            console.log(information);
        
                let topTrack = information.data

                let cancion = document.querySelector("#topSongs")
                console.log (cancion)

                for (let i = 0; i < 5; i++) {
                    const element = topTrack[i];
        
                    let nombre = element.title
                    let idTrack = element.id
                    document.querySelector(".artistTopSongs").innerHTML += `<h5 class="ultimo-tema"><i class="far fa-heart"></i><i class="fa fa-play-circle fa-2x" aria-hidden="true"></i></h5> </h2>
                        <article class="canciones" >` + (i+1) +`
                        <a class="despintar" href="tracks.html?id=`+ idTrack +`">` + nombre +`</a>
                        </article>
                        
                        <article class="add-playlist">
                            <i class="mas" class="fas fa-plus botoncito"  idCancion=` + idTrack + `></i>
                        </article>
                        
                        
                        </section>`

                        }

                        element.addEventListener("load", function () {
                            let trackId = this.getAttribute("idCancion")

                            let ArrayCancionesFavs

                            if (localStorage.getItem("canciones")) {

                                ArrayCancionesFavs = localStorage.getItem("canciones").splist(",")
                                ArrayCancionesFavs.push(idTrack)
                            } else {
                                ArrayCancionesFavs = [trackId]


                                localStorage.setItem("canciones", ArrayCancionesFavs);
                            }
                        })
                    }



                )
        })

})