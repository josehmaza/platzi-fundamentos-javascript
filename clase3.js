// RESUMEN DE LA CLASE: 'NUMEROS'
// - Declaramos la existencia de la variable 'edad' cuyo valor definido es igual
//   a 18
var edad = 18

// - Si queremos aumentar en una unidad al valor de la variable 'edad' hay 3 formas
//   de hacerlo:
//   ---> edad = edad + 1 (forma especifica)
//   ---> edad += 1 , ---> edad++ (formas abreviadas)
edad+=1

// - Declaramos la existencia de la variable 'peso' cuyo valor definido es igual
//   a 75
var peso = 75

// - Luego, Restamos 2 porque segun el contexto que dio el profesor, la persona
//   bajo de peso. Nos podemos ayudar de una de las formas abreviadas:
peso-=2

// - Declaramos la existencia de la variable 'sandwich' cuyo valor definido es
//   igual a 1.
var sandwich = 1

// - El valor de esta variable se suma al nuevo valor de peso porque segun el
//   contexto que dio el profesor, la persona subio de peso por comer un sandwich
peso +=sandwich

// - Declaramos la existencia de a variable 'jugarAlFutbol' cuyo valor definido
//   es igual a 3
var jugarAlFutbol = 3

// - El valor de esta variable se resta al nuevo valor de peso porque segun el
//   contexto que dio el profesor, la persona perdio peso por jugar futbol
peso-=jugarAlFutbol

// OTRO EJEMPLO:
// - Se declara la existencia de la variable 'precioDelVino' cuyo valor es igual
//   a 200.3
var precioDelVino= 200.3

// - Como se ha comprado 3 botellas de vino , declaramos una variable Total cuya
//   ecuacion es igual '   precioDelVino*3  ' , pero como la memoria reserva muy
//   poco espacio para los decimales  por lo que seria mejor usar :
var total = Math.round(precioDelVino*100*3)/100
// - La funcion que cumple ' Math.round() ' es la de redondear un numero decimal

// - Ahora si queremos que despues del numero entero aparezca solamente un total
//   de decimales que quieres, entonces, utilizaremos ' toFixed()' que tiene Como
//   estructura ---> "   nombre_De_Variable.toFixed( numero_de_decimales )   "
//   Ejemplo:
var totalStr=total.toFixed(3)
// - Recordar que despues de usar dicha funcion lo que va a regresar va a ser una
//   cadena de texto y no un numero entero.
// - Si queremos que vuelva a ser un numero y que se mantenga los decimales, entonces,
//   utilizaremos la funcion ' parseFloat() '
var tota2 = parseFloat(totalStr)

// ULTIMO EJEMPLO
// - Declaramos  la existencia de 2 varaibles ('pizza' y 'personas') cuyos valores
//   son 8 y 2 respectivamente
var pizza = 8
var persona = 2

// - Si queremos saber cuantas pizzas debe comer cada persona, debemos realizar una
//   division
var cantidadDePorcionesPorPersona =pizza / persona