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


const obtenerPersonaje =(id) =>{
    debugger;
    return new Promise((resolve, reject) => {
        const lukurl=`${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(lukurl, opts,(data) => {
            resolve(data)
        }).fail((error)=> reject(id))
    })

    
}

const onError = id => console.log(`Ocurrió un error al obtener le personaje ${id}`)

let ids = [1, 2, 3, 4, 5, 6, 7]
let promises = ids.map( obtenerPersonaje)
Promise.all(promises)
.then(responses => {
    console.log('al fin ', responses)
})
.catch(onError)
