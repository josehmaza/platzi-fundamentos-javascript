/******Clase 17 Introducción a arrays ******/

/* Los arrays son estructuras que nos permiten organizar elementos dentro de una collección. 
Estos elementos pueden ser números, strings, booleanos, objetos, etc.*/

let hernan = {
    nombre: 'Hernan',
    apellido: 'Salinas',
    altura: 1.62
}

let davis = {
    nombre: 'Davis',
    apellido: 'Pendevis',
    altura: 1.81
}
let arelys = {
    nombre: 'Arelys',
    apellido: 'Maza',
    altura: 1.62
}
let carol = {
    nombre: 'Carolina',
    apellido: 'Herrera',
    altura: 1.78
}
let andres = {
    nombre: 'Andres',
    apellido: 'Ramirez',
    altura: 1.85
}
let jefferson = {
    nombre: 'Jefferson',
    apellido: 'Zambrano',
    altura: 1.69
}

let personas = [hernan, davis, arelys, carol, andres, jefferson]
for(var i =0 ; i < personas.length; i++){
    let persona = personas[i]
    console.log(`${persona.nombre} tiene ${persona.altura} de altura`)
}
//Clase 18
// 1- Filtrar un array requiere de dos cosas, un array para guardar los datos filtrados y una función que permita aplicar el filtro a los datos

// 3- Si los datos cumplen con el filtro, el método filter de manera implicita crea una copia de dicho elemento declarado en el arreglo original y lo empluja a la variable asignada...

// Filter recibe una función callback, que es invocada tantas veces como elementos haya dentro del arreglo

const esAlta = ({altura}) => altura > 1.8
let personasAltas = personas.filter(esAlta)
console.log(personasAltas)
// RETO personas bajas

let personasBajas = personas.filter(persona => !esAlta(persona))
console.log(personasBajas)

// Si quiero retornar un objeto desde la arrow function debo ponerle entre parentesis persona => ({})
const pasarAlturaAcms = persona => ({
        ...persona,
        altura: persona.altura *100
})
// Clase 19: Transformar un array
/* En esta clase veremos cómo transformar un array. 
El método map() itera sobre los elementos de un array en el orden de inserción y 
devuelve array nuevo con los elementos modificados.*/
console.log('Personas con altura en cms')
let personasAlturacms = personas.map(pasarAlturaAcms)
console.log(personasAlturacms)