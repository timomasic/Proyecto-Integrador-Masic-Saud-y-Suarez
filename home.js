window.addEventListener("load", function () {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")
        .then(
            function (respuesta) {
                return respuesta.json();
            }
        )

        //albulms
        .then(
            function (information) {
                console.log(information)
                let album = document.querySelector("li .track-item")
                let albumsList = information.data;
                
                for (let i = 0; i < albumsList.length; i++) {
                    console.log(albumsList);
                    let idDelAlbum = albumsList[i].id
                    let imagenDelAlbum = albumsList[i].cover
                    let tituloDelAlbum = albumsList[i].title
                    let albumItem = `
                <li class="track-item">
                    <div class="ocultar" class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <a href="album.html?idalbum=` + idDelAlbum + `">  <img class="foto" src="` + imagenDelAlbum + `" alt=""> </a>
                        </div>
                        <div class="uk-card-body">
                            <a href="album.html?idalbum=`+ idDelAlbum +`" > <h3 class="uk-card-title">` + tituloDelAlbum + `<h3></a>
                        </div>
                    </div>
                </li>
                `
                    document.querySelector("#topAlbums").innerHTML += albumItem;
                }
            }
        )

        //artista
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")
        .then(
            function (respuestas) {
                return respuestas.json();
            })
        .then(function (information) {
            let artist = document.querySelector("li.topArtist")
            console.log(information)
            let topArtist = information.data;
            for (let i = 0; i < topArtist.length; i++) {
                let artistId = topArtist[i].id;
                let artistName = topArtist[i].name;
                let artistPic = topArtist[i].picture_xl;
                let artistItem = `<li>
                    <div class="ocultar" class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                        <a href="artist.html?idartist=` + artistId + `">  <img class= "foto" src="` + artistPic + `" alt=""> </a>
                    </div>
                    <div class="uk-card-body artist-body-card">
                        <a href="artist.html?idartist=` + artistId + `"><h3>` + artistName + `</h3></a>
                    </div>
                </li>`;
                document.querySelector("#topArtist").innerHTML += artistItem;
            }
        })

        //tracks
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks")
        .then(
            function (respuestas) {
                return respuestas.json();
            })
        .then(function (information) {
            let tracks = document.querySelector("li.topTracks")
            console.log(information)
            let topTrack = information.data;
            for (let i = 0; i < topTrack.length; i++) {
                console.log("hola");
                let trackPosition = topTrack[i].position;
                let trackId = topTrack[i].id;
                let trackName = topTrack[i].title;
                let trackPic = topTrack[i].album.cover_xl;
                let prueba = topTrack[i].preview;
                let trackItem = `<a class="despintar" href="https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"><article class= "cancion"> ` + trackPosition + `<button class="boton"><i class="far fa-heart"></button></i><a class="despintar" href="tracks.html?id=` + trackId + `">` + trackName + `</a></article class= "cancion"></a>`
                document.querySelector("#topTrack").innerHTML += trackItem;
            }
        })
})


//let trackImage = trackList[i].album.cover_xl;
//top-tracks.html?trackId=` + trackId + `
//`+trackId+`