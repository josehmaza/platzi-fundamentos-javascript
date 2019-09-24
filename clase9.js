//      clase 9  Comparaciones en JavaScript
/* Existen varias maneras de comparar variables u objetos dentro de javascript. 
En el primer ejemplo le asignamos a X un valor numérico y a Y un string. 
Para poder compararlos debemos agregar dos signos de igual (==). 
Esto los convierte al mismo tipo de valor y permite que se puedan comparar. */
var x=4, y='4'
// x == y esto nos devuelve TRUE. Esto lo que hace es comparar los valores igualando los datos a tipo string.Por ese motivo da True.

//Si queremos realizar una comparacion te tipos debemos utilizar el x === y
/* Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). Esto permite que JavasScript no iguale las variables que son de distinto tipo. 
Te recomendamos que uses el triple igual siempre que estés comparando variables. 

Existen cinco tipos de datos que son primitivos:

Boolean
Null
Undefined
Number
String
*/

var persona1 = {
    nombre:'jose'
}
var persona2 = { 
    nombre:'Elias'
}

var otraPersona = {
    ...persona1
}
/*persona1 == persona2 esto nos devuelve FALSE
Lo que sucede es que etsamos comparando objetos, cuando comparamos objeto lo que hace JS
es preguntar por la referencia de la variable  que estamos utilizando. Lo mismo sucede cuando 
utilzamos el === */
var otraPersona1 = persona1 
//Esta otra persona apunta a la misma referencia que persona1, por lo tanto en este caso si seran los mismos objetos en memoria ram.