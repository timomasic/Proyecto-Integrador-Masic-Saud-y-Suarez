window.addEventListener("load", function () {

    let queryString = location.search;
    let datos = new URLSearchParams(queryString);
    let idTrack = datos.get('id');
    console.log(idTrack);


    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + idTrack)
        .then(
            function (respuesta) {
                return respuesta.json();

            }
        )
        .then(function (datos) {
            console.log(datos)
            let mainTrack = document.querySelector(".mainTrack")
            mainTrack.innerHTML = `
        <div class="grid-item"> 
            <img class="imageSize" src=` + datos.album.cover_medium + `>
        </div>

        <article class="trackInfo">
            <div class="artistDetails">
              <h1>` + datos.artist.name + `</h1>
              <h3>` + datos.album.title + `</p>
              <button class="boton"><i class="far fa-heart"></i></button>
            </div>
        </article>
    `
            let playlist = []
            console.log(playlist)
            let recuperoStorage = localStorage.getItem('playlist');
            if (recuperoStorage == null) {
                playlist = [];
            } else {
                playlist = JSON.parse(recuperoStorage);
            }

            if (playlist.includes(idTrack)) {
                document.querySelector('.boton').innerHTML = '<i class="fas fa-heart"></i>'
            }
            let agregar = document.querySelector('.boton');
            agregar.addEventListener('click', function () {
                if (playlist.includes(idTrack)) {
                    let indiceEnElArray = playlist.indexOf(idTrack);
                    playlist.splice(indiceEnElArray, 1);
                    document.querySelector('.boton').innerHTML = '<i class="far fa-heart"></i>';
                    console.log(playlist);
                } else {
                    playlist.push(idTrack);
                    document.querySelector('.boton').innerHTML = '<i class="fas fa-heart"></i>';

                }
                let playlistParaStorage = JSON.stringify(playlist);
                localStorage.setItem('playlist', playlistParaStorage);
                console.log(localStorage);
            })

            let player = document.querySelector('iframe');
            player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=1500&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idTrack + '&app_id=1'
        });

    })

