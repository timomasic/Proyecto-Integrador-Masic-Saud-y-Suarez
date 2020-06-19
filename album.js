let querystring = location.search;
let datos = new URLSearchParams(querystring);
let idAlbum = datos.get("idalbum");
console.log(idAlbum);

let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy +"https://api.deezer.com/album/"+ idAlbum;

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    let albumsData = data.data;
    let nombreAlbum = data.title;
    let coverAlbum = data.cover_medium;
    let trackIdAlbum = data.id;
    let trackAlbum = data.title;

    let infoAlbum = document.querySelector(".infoAlbum") 
    infoAlbum.innerHTML = `
    <img src="`+ coverAlbum +`"
    <h3>`+ nombreAlbum +`</h3>
    `
    for (let index = 0; index < albumsData.length; index++) {
        const element = albumsData[index];
        let temasAlbum = document.querySelector(".cancionesDelAlbum")
        let nombreAlbumCancionId = data.tracks.data.id;
        let nombreAlbumCancion = data.tracks.data.title;
        temasAlbum.innerHTML = `
        <li>
            <a href="tracks.html?id=`+ nombreAlbumCancionId +`">`+ nombreAlbumCancion +`</a>
        </li>
        `
    }
})

