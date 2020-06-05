window.addEventListener ("load", function()  {
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27")
    .then(
        function (respuesta){
            return respuesta.json();
        }
    )
    .then(
        function(information) {
            let trackList = information.tracks.data;
            for (let i = 0; i < trackList.length; i++) {
                let trackId = trackList[i].id;
                let trackTitle = trackList[i].title_short;
                let trackArtist = trackList[i].artist.name;
                let trackArtistId = trackList[i].artist.id;
                let trackItem = `
                <li class='track-item'>
                    <a class='tNomb' href='track.html?trackID=` + trackId +`'>` + trackTitle + `</a>
                    <span> by <a class='aNomb' href='artist.html?artistID=` + trackArtistId + `'>` + trackArtist +  `</a></span>
                </li>
                `;
                document.querySelector(".trackList").innerHTML += trackItem ;
            }
        }
    )
})
