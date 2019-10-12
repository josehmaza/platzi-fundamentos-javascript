//      Manejo de errores con callbacks
/*
Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una
 sucesión de callbacks utilizamos el método fail().
*/

//De esta manera se obtiene datos de la api SWAPI.
const API_URL='https://swapi.co/api/'
const PEOPLE_URL='people/:id'

const opts={ crossDomain: true }


function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const lukurl=`${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(lukurl, opts,(data) => {
            resolve(data)
        }).fail((error)=> reject(id))
    })

    
}

const onError = id => console.log(`Ocurrió un error al obtener le personaje ${id}`)
obtenerPersonaje(1)
.then(personaje => {
    console.log(`El personaje es ${personaje.name}`)
})
.catch (onError)