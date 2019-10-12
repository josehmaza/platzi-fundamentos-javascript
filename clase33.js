// Promesas Encadenadas

/*
A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro
de otros, cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada 
sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea
mucho más legible y mantenible.
*/
// Volviendo al ejemplo anterior
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
    return obtenerPersonaje(2)
})
.then(personaje2 => {
    console.log(`El personaje 2 es ${personaje2.name}`)
    return obtenerPersonaje(2)
})
.then(personaje3 => {
    console.log(`El personaje 3 es ${personaje3.name}`)
    return obtenerPersonaje(2)
})
.then(personaje4 => {
    console.log(`El personaje 4 es ${personaje4.name}`)
    return obtenerPersonaje(5)
})
.then(personaje5 => {
    console.log(`El personaje 5 es ${personaje5.name}`)
    return obtenerPersonaje(5)
})
.then(personaje6 => {
    console.log(`El personaje 6 es ${personaje6.name}`)
    
})
.catch (onError)