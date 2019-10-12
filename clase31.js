//      Manejo de errores con callbacks
/*
Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una
 sucesión de callbacks utilizamos el método fail().
*/

//De esta manera se obtiene datos de la api SWAPI.
const API_URL='https://swapi.co/api/'
const PEOPLE_URL='people/:id'

const opts={ crossDomain: true }


function obtenerPersonaje(id,callback){
    const lukurl=`${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(lukurl, opts,callback).fail(()=> console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
    )
    
}
/* Si queremos que las llamadas al servidor se ejecuten en orden debemos utilizar
callbacks */
// CallbackHell: lista anidada de funciones
//Lo que sucede es que obtenemos el personaje 1 y llamamos al callback

obtenerPersonaje(1, function(personaje){ 
    console.log(`Hola soy ${personaje.name}`)
    obtenerPersonaje(2, function(personaje){
            console.log(`Hola soy ${personaje.name}`)
        obtenerPersonaje(3, function(personaje){
            console.log(`Hola soy ${personaje.name}`)
            obtenerPersonaje(4,function(personaje){
                console.log(`Hola soy ${personaje.name}`)
                obtenerPersonaje(5,function(personaje){
                    console.log(`Hola soy ${personaje.name}`)
                    obtenerPersonaje(6, function(personaje){
                        console.log(`Hola soy ${personaje.name}`)
                        obtenerPersonaje(7, function(){
                            console.log(`Hola soy ${personaje.name}`)
                        })
                    })
                })
            })
        })
    })
})