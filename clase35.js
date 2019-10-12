// Clase 35: Asyc- await, lo ultimo en asincronismo
console.log('CLASE 35')
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
//S i se va a usar el await debmos colocar asyn en el function
async function obtenerPersonajes(){
    try {
        let ids = [1, 2, 3, 4, 5, 6, 7]
        let promises = ids.map( obtenerPersonaje)
        // Usamos await para que la ejecucion de codigo no avanze hasta que se ejecuten todas las promesas, entonces se guardar en
        // la variable personajes
        var personajes = await Promise.all(promises)
        console.log(personajes)
    } catch (error) {
        onerror(error)        
    }
    
}


obtenerPersonajes()