//          clase 5 Alcance de las funciones
// En esta clase hablaremos del alcance que tienen las funciones.
var nombre = 'jose'/*Si una variable no está definida dentro del cuerpo de una función hablamos 
de una variable global.*/


function imprimirNombreMayuscula() {
    nombre = nombre.toUpperCase()
    console.log(nombre)
    // Por el contrario, una variable definida dentro de una función es una variable local.
}
imprimirNombreMayuscula()

/* Significa tambien que al definirlo de manera global a la variable:
se lo asigna al objeto global y dependera del entorno donde estemos ejecutando el JS, 
si es en un entorno de servidor de NODE tendra el lugar donde se defina el 'Objeto Global' 
y si lo estamos ejecutando en el navegador este objeto sera Window */

//Ejecutando window.nombre en la consola obtenemos el nombre 'JOSE'

/* Para que la ejecución de una función no modifique una variable global usamos parámetros 
en lugar de pasar directamente la variable. */

functionimprimirNombreMayuscula2(n){
    n = n.toUpperCase()
    console.log(n)
    // Por el contrario, una variable definida dentro de una función es una variable local.
}
imprimirNombreMayuscula(nombre)

//Es posible utilizar el mismo nombre para una variable global y para el parámetro de una función con un alcance local.
functionimprimirNombreMayuscula3(nombre){
    window.nombre // Debemos cololar esto para poder acceder de manera local a una variable global.
    nombre = nombre.toUpperCase()
    console.log(nombre)
    // Por el contrario, una variable definida dentro de una función es una variable local.
}