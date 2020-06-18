window.addEventListener ("load", function()  {  
    
    let queryString = location.search;
    let datos = new URLSearchParams (queryString);
    let idTrack = datos.get ('id');
    console.log(idTrack); 
    
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + idTrack)
    .then(
        function (respuesta){
            return respuesta.json();
        
        }  
    )
    .then(function(datos){
    console.log(datos)
    let mainTrack = document.querySelector(".mainTrack")
    mainTrack.innerHTML = `
        <div class="grid-item"> 
            <img class="imageSize" src=`+ datos.album.cover_medium +`>
        </div>

        <article class="trackInfo">
            <div class="artistDetails">
              <h1>`+ datos.artist.name +`</h1>
              <h3>`+ datos.album.title + `<button class="boton"><i class="far fa-heart"></i></button>` +`</p>
            </div>
        </article>
    `
    });
})