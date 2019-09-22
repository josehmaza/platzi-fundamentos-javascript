var nombre='Hernan', apellido='Maza' //Declaracion de variables

var nombreMayus = nombre.toUpperCase()//nombre a maysuculas 
var apellidoMinus = apellido.toLowerCase()//nombre a minusculas

var pimeraLetraNombre = nombre.charAt(0)//primer letra dentro de la cadena

var lenghtNombre = nombre.length //longitud de la cadena

/*Texto mostrado por interpolacion de texto, se necesita usar la comilla invertida  `${nombre_de_la_variable}`
Nos permite poner codigo javascript dentro del texto
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings
*/
console.log(`\nMi nombre es ${nombreMayus}${apellidoMinus} 
la primer letra de mi nombre es ${pimeraLetraNombre} 
y tiene un totalde${lenghtNombre} letras`)

//creacion de substrings (Cadenas  de otras cadenas)

var substringNombre = nombre.substr(3,5)

console.log(`\nUna de Subcadena de mi nombre puede ser ${nombre} => ${nombre}`)

/*RETO!!!!!!!!!!!!!!!!!!!!!!!!!!
    Mostrar la ultima letra de
    cualquier nombre
*/

var cualquierNombre = 'Enrique'

console.log(`\nLa ultima letra de tu nombre es la '${cualquierNombre.charAt(cualquierNombre.length-1)}'`)
