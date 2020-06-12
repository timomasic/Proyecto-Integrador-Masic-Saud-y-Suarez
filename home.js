window.addEventListener ("load", function()  {
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/")
    .then(
        function (respuesta){
            return respuesta.json();
        }
    )
    .then(
        function(information) {
           let track = document.querySelector ("li .track-item") 

            let trackList = information.tracks.data;
            for (let i = 0; i < trackList.length; i++) {
                let trackId = trackList[i].id;
                let trackTitle = trackList[i].title_short;
                let trackArtist = trackList[i].artist.name;
                let trackArtistId = trackList[i].artist.id;
                let trackImage = trackList[i].picture;
                let trackItem = `      <div class="grid-item">
                <a href="top-tracks.html"> 
                  <img class="imageSize" src= `+trackImage+`>
                </a>
                <br>
                <a class="item" href="top-tracks.html">`+trackTitle+`</a>
              </div>`
        
            
                document.querySelector(".trackList").innerHTML += trackItem ;
            }
        }
    )
})