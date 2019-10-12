//              clase 4 Funciones
/* Las funciones son fracciones de código reutilizable. En esta clase aprenderemos 
a definir e invocar nuestras funciones.*/
var nombre = 'jose', edad = 23

// Para definir una función utilizaremos la palabra reservada ““function””
// Delimitamos el cuerpo de la función usando llaves { }
function imprimirEdad(){
console.log(`${nombre} tiene ${edad} años`);
}

//Para invocar a la funcion 
imprimirEdad()

/* funcio que acepta parametros. Los parámetros de la función son variables que se pasan 
 a la función escribíendolos entre paréntesis () */
function imprimirEdad2(n, e){
console.log(`${n} tiene ${e} años`);
}
//Para invocar a la funcion pasando parametros por referencia
imprimirEdad2(nombre, edad)
imprimirEdad2('Juan' , 28)

// QUe sucede si los parametros se invierten?
imprimirEdad2(23,'jose') // Salida en consola = 23 tiene jose años
/* Esto es debido a que JS es indistitnto el orden de las variables, al igul que si no 
le pasamos ninguna. DEBEMOS TERNERLO EN CUENTA YA QUE NO ES FUERTEMENTE TIPADO*/

/*Definir funciones nos sirve para reutilizar código. JavaScript es un lenguaje interpretado,
esto quiere decir que intentará ejecutar el código sin importar si los parámetros que le 
pasemos a la función estén invertidos o incluso incompletos.*/