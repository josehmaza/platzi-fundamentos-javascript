/*¿Cuándo hace falta poner el punto y coma al final de la línea?
El punto y coma es opcional en JavaScript, excepto en algunos casos:

Cuando usamos varias instrucciones en una mísma línea
Al comenzar la próxima línea con un array
Al comenzar la próxima línea con un template string */

console.log('hola mi nombre es Ronald'); // 1er caso, Donde comenzamos luego un array
[1,2,3].forEach(n => console.log(n * 2 )) 

const nombre = 'ronald'
console.log('hola mi nombre es Ronald');  //2da, cuando usamos un template string
`${nombre} es un desarrollador`

function calcularDoble(numero) {
    return { // aqui también porque despues del return  debe ir pegado al objeto en la misma linea  
        original: numero, doble: numero * 2 
    }
}