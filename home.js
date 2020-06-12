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
                let trackImage = trackList[i].album.cover;
                let trackItem = `
                <li class="track-item">
                <div class="uk-card uk-card-default"> 
                <img src= `+ trackImage +`>
                </div>
                <div class="uk-card-body">

                <a href="artist.html"> <h3 class="uk-card-title">`+ trackTitle +`</h3></a>
                </div>
                </li>
                `
        
            
                document.querySelector(".trackList").innerHTML += trackItem;
            }
        }
    )
})

// <li class="track-item">
// <div class="uk-card uk-card-default">
//<div class="uk-card-media-top">
//    <img src="https://images-na.ssl-images-amazon.com/images/I/61fXEwg-lAL._SL1400_.jpg" alt="">
//</div>
//<div class="uk-card-body">
//  <a href="artist.html"> <h3 class="uk-card-title"><h3> Eminem </h3></a>  
//    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
//</div>
//</div>
//</li> 
