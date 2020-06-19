window.addEventListener("load", function() {
    
    let queryString = new URLSearchParams(location.search);
  
    let numeroAlbum = queryString.get("idalbum");
    console.log (numeroAlbum);
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + numeroAlbum)
    .then(function(respuesta) {
        return respuesta.json()
    })

    .then
    (function(information) {
    
        let albums = information

        console.log(albums);

        let nombredelArtista = title

        let fotoAlbum = album.cover_xl
        
        let albumTracks = album.tracks

        document.querySelector(".albumsName").innerHTML += `<ul><img  id="imageSize" src="` + fotoAlbum+`" alt="foto de` + " " + nombredelArtista +`"></ul>`

        document.querySelector("#detalle").innerHTML += `
            <li><b class="error-desktop">` + albums+`</b></li>
            <li class="boton">
                <button type="button">
                Follow</button>
            </li>
            <li>` + (albums) + " " +`album1</li>
            `
       
        
            fetch("https://cors-anywhere.herokuapp.com/" + albumTracks)

            .then(function(respuesta) {
                return respuesta.json()
            })
        
            .then(function(information) {
            console.log(information);
        
                let albumTracks = information.data

                let cancion = document.querySelector(".songs")
                console.log (cancion)

                for (let i = 0; i < 5; i++) {
                    const element = albumTracks[i];
        
                    let nombre = element.title
                    let idTrack = element.id
                    document.querySelector(".songs").innerHTML += `<article class= "cancion">`+ nombre +`<i class="far fa-heart"></i>`+trackId+`</article class= "cancion">
                        <article class="" >` + (i+1) +`
                        <a href="Tracks.html?idalbum=`+ idTrack +`">` + nombre +`</a>
                        </article>
                        
                        <article class="add-playlist">
                            <i class="fas fa-plus botoncito"  idCancion=` + idTrack + `></i>
                        </article>
                        </section>`
                        
                }

                    element.addEventListener("load", function () {
                        let trackId = this.getAttribute("idCancion")
                        
                        let ArrayCancionesFavs

                        if(localStorage.getItem("canciones") ){ 
                            
                           ArrayCancionesFavs = localStorage.getItem("canciones").splist(",")
                           ArrayCancionesFavs.push(idTrack)
                        }
                    
                        else {
                            ArrayCancionesFavs = [trackId]
                        
                
                        localStorage.setItem("canciones", ArrayCancionesFavs);
                    }}
                        )}

            
                            
            ) 
    })

})
