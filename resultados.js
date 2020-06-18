window.addEventListener("load", function(){
    this.location.search
    let niidea = location.search
    console.log(niidea)
    let queryString = new URLSearchParams(niidea)
    console.log(queryString)
    let loBuscado = queryString.get ("buscador");
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
                <div>
                    <a href="album.html?id=` + resultados.id + `">
                        <img src="` + resultados.album.cover_medium + `"></img>
                        <h4>` + resultados.album.title + `</h4>
                    </a>
                </div>
                `
            })
            }
    )
})