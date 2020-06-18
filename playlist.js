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
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + 'https://api.deezer.com/track/' + idTrack;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (track) {
            playlistWrapper.innerHTML += '<li></li>'
        })
}