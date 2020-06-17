window.addEventListener("load", function(){
    this.location.search
    let niidea = location.search
    console.log(niidea)
    let queryString = new URLSearchParams(niidea)
    console.log(queryString)
    let loBuscado = queryString.get ("searchBar");
    console.log(loBuscado)
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + loBuscado + "")
    .then(
        function (respuesta){
            return respuesta.json();

        }
    )

    .then(
        function (resultado){
            let listadoResultados = document.querySelector(".listadoResultados")
            console.log(listadoResultados);
            
            let resultadoBusqueda = resultado.data
            console.log(resultadoBusqueda)

            

            resultadoBusqueda.forEach(function(resultados) {
                listadoResultados.innerHTML += 
                `
                <li>
                    <a href="album.html?id=` + resultados.id + `">
                        <img src="` + resultados.album.cover_small + `"></img>
                        <h4>` + resultados.title_short + `</h4>
                    </a>
                </li>
                `
            });


            }
        
    )
})