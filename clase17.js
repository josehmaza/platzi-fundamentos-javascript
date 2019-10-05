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
    altura: 1.62
}
let arelys = {
    nombre: 'Arelys',
    apellido: 'Maza',
    altura: 1.62
}
let carol = {
    nombre: 'Carolina',
    apellido: 'Herrera',
    altura: 1.62
}
let andres = {
    nombre: 'Andres',
    apellido: 'Ramirez',
    altura: 1.62
}
let jefferson = {
    nombre: 'Jefferson',
    apellido: 'Zambrano',
    altura: 1.62
}

let personas = [hernan, davis, arelys, carol, andres, jefferson]
for(var i =0 ; i < personas.length; i++){
    let persona = personas[i]
    console.log(`${persona.nombre} tiene ${persona.altura} de altura`)
}