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
    <h3>`+ nombreAlbum +`</h3>`

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(
    function(resultado) {
        console.log (resultado)
        const tracksAlbums = resultado.tracks.data;
        for (let index = 0; index <= tracksAlbums.length; index++) {
        const cadaAlbum = tracksAlbums[index];
        let name = cadaAlbum.title;
        let id = cadaAlbum.id;
        let nuevoHtmlTops = `       
        <li>
            <a href="tracks.html?id=`+ id +`">`+ name+`</a>
        </li>
        `
        document.querySelector(".cancionesDelAlbum").innerHTML += nuevoHtmlTops
    }})
})

