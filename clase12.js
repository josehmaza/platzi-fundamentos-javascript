// CLASE 12 : Arrow functions

var hernan = {
    nombre: 'Hernan',
    apellidos: 'Maza',
    edad: 17,
    ingeniero: false,
    licenciado: true,
    cantante: false,
    guitarrista: false,
    atleta: true
}

// Si bien los objetos no tienen las mismas propiedades, las funciones desde donde se utilizan solo necesitan el nombre, apellidos y edad.

var arelys = {
    nombre: 'Arelys',
    apellidos: 'Targerain',
    edad: 26
}

// Las constantes permiten declarar un valor que no cambiará a lo largo de la ejecución del programa.
// No se puede reasignar su valor, de lo contrario marca error
const MAYORIA_DE_EDAD = 18

// La sentencia return, permite detener la ejecución de la función y devolver un valor a su exterior, es decir, desde donde fué invocada
const esMayorDeEdad = ({edad}) =>  edad >= MAYORIA_DE_EDAD

//RETO
const esMenorDeEdad = persona => !esMayorDeEdad(persona)

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}
const allowAccess = (persona) => {
    if(!esMayorDeEdad(persona)){
        console.log('ACCESO DENNIED')
    }
    if(!esMenorDeEdad(persona)){
        console.log('ACCESS GRANTED')
    }
}

