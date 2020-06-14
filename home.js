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
                console.log(trackList);
                let trackId = trackList[i].id;
                let trackTitle = trackList[i].title_short;
                let trackArtist = trackList[i].artist.name;
                let trackArtistId = trackList[i].artist.id;
                let trackImage = trackList[i].album.cover_xl;
                let trackItem = `
                <li class="track-item">
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <a href="artist.html">  <img src="` + trackImage + `" alt=""> </a>
                    </div>
                    <div class="uk-card-body">
                        <a href="artist.html" > <h3 class="uk-card-title">` + trackTitle + `<h3></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                </li>
                `
                document.querySelector(".trackList").innerHTML += trackItem;
            }
        }
    )
    
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")
    .then(
        function(respuestas){
            return respuestas.json();  
        })
    .then(function(information){
            let artist = document.querySelector ("li.topArtist")
            console.log (information)

            let topArtist = information.data;

            for (let i = 0; i< topArtist.length; i++){

                let artistId = topArtist[i].id;

                let artistName = topArtist[i].name;

                let artistPic = topArtist[i].picture_xl;

                let artistItem = `<li>
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <img class="img-artist" src="` + artistPic + `" alt="artist N°` + i + `" >
                    </div>
                    <div class="uk-card-body artist-body-card">
                        <a href="artist.html?artistId=` + artistId + `"><h3>` + artistName + `</h3></a>
                    </div>
                </li>`    
             ;
             document.querySelector("#topArtist").innerHTML += artistItem;
             }
            
        
        }
    )
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks")
    .then(
        function(respuestas){
            return respuestas.json();
        })
    
    .then(function(information){
            let tracks = document.querySelector("li.topTracks")
            console.log(information)

            let topTrack = information.data;

            for (let i = 0; i< topTrack.length; i++){
                let trackId = topTrack[i].id;

                let trackName = topTrack[i].name;

                let trackPic = topTrack[i].picture_xl;

                let trackItem = `<li>
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <img class="img-track" src="` + trackPic + `" alt="track N°` + i + `" >
                    </div>
                    <div class="uk-card-body track-body-card">
                        <a href="top-tracks.html?trackId=` + trackId + `"><h3>` + trackName + `</h3></a>
                    </div>
                </li>`    
             ;
             document.querySelector("#topTrack").innerHTML += trackItem;
            }
        }
    )
})
        
//  let trackImage = trackList[i].album.cover_xl;

    