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
            <li><b class="error-desktop">` + nombre + `</b></li>
            <li class="boton">
                <button type="button">
                Follow</button>
            </li>
            <li>` + (fans) + " " + `fans</li>
            `


            fetch("https://cors-anywhere.herokuapp.com/" + topTrack)

                .then(function (respuesta) {
                    return respuesta.json()
                })

                .then(function (information) {
                        console.log(information);

                        let topTrack = information.data

                        let cancion = document.querySelector("#topSongs")
                        console.log(cancion)

                        for (let i = 0; i < 5; i++) {
                            const element = topTrack[i];

                            let nombre = element.title
                            let idTrack = element.id
                            document.querySelector(".artistTopSongs").innerHTML += `<h5 class="ultimo-tema">` + +`<i class="far fa-heart">` + `</i></h5> </h2>
                        <article class="lines" >` + (i + 1) + "-" + `
                        <a class="hipervinculos" href="tracks.html?idTrack=` + idTrack + `">` + nombre + `</a>
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