window.addEventListener ("load", function()  {
fetch( "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
.then(
    function (respuesta){
        return respuesta.json();
    }  
)
.then(
    function(information) {
        
let info= information.data
for (let index = 0; index < info.length; index++) {
    const music= info[index];
    let title = music.name
    let infoGenre= music.id
    let genreItem= '<a href="detalle-genero.html?id-genero='+infoGenre+'"><h3 class="generos">'+ "."+title+'</h3> </a>'

    

document.querySelector(".listadoResultados").innerHTML += genreItem; 

}
    })
    })
