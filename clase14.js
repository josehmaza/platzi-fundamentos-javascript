// clase 14 Estructuras repetitivas: while
/*
En esta clase estudiaremos otra estructura repetitiva llamada while.
While se ejecuta únicamente mientras la condición que se está evaluando es verdadera.

En ocasiones nuestro código puede fallar por errores de syntaxis o errores lógicos. 
En caso de que quieras verificar tu código, debes utilizar un debugger. 
El código se detiene cada vez que lee esta palabra.
*/
var persona ={
    nombre: 'Hernan',
    apellido: 'Maza',
    edad: 25,
    peso: 59
}

const CAMBIO_PESO = 0.300
const DIAS_AÑO = 365
const META = persona.peso - 3


console.log(`Al comienzo del año ${persona.nombre} pesa ${persona.peso}Kg`)
//Simulamos el proceso del año

const aumentarPeso = (persona,variante) => persona.peso += variante

const decrementarPeso= (persona, variante) => persona.peso -= variante

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() <0.4
var dias = 0
//Parametros del while(consicion) se va a repetir siempre que la consicion se cumpla.
while(persona.peso > META){ 
    
    if(comeMucho()){
        aumentarPeso(persona,CAMBIO_PESO)
    }
    if(realizaDeporte()){
        console.log(decrementarPeso(persona,CAMBIO_PESO))
    }
    dias += 1
} 

console.log(`Pasaron ${dias} dias hasta que ${persona.nombre} pudo bajar de peso `)
console.log(`Al final del año ${persona.nombre} pesa ${persona.peso.toFixed(2)}Kg`)