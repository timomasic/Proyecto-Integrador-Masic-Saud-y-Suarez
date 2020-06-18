let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);
let playlistWrapper = document.querySelector('.playlistWrapper');
console.log(playlist);

if (recuperoStorage == null || recuperoStorage == "[]") {
    playlist = [];
    playlistWrapper.innerHTML += '<h2 class="noHay"> ¡No hay canciones! </h2>'
    console.log(playlistWrapper);
} else {
    playlist.forEach(function (idTrack) {
        buscarYMostrarTrack(idTrack);
    });
}

function buscarYMostrarTrack(idTrack) {
    let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + idTrack;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (track) {
            playlist.forEach(function(x) {
                let cantidad = 0;
                cantidad++;
                let cantidadCanciones = document.querySelector(".cantidadCanciones")
                cantidadCanciones.innerHTML = cantidad + " Songs"
            });
            
            let playlistWrapper = document.querySelector('.playlistWrapper');
            playlistWrapper.innerHTML += '<li><article class="cancion"><a class="despintar" href="tracks.html?id='+ track.id +'"><article class= "cancion"><a class="" href="tracks.html?id=' + track.id + `">` + track.title + '</a></article class= "cancion"></a></article></li>';
            console.log(track)
        })
}
