// clase 16 Condicional múltiple: switch
/* Una ultima estructura de control se llama switch. Switch se utiliza para realizar diferentes 
ciones basadas en múltiples condiciones.

Prompt, muestra un cuadro de mensaje que le pide al usuario que ingrese algúna información.

Break, sirve para que el browser se salte un bucle. 

default para el caso de que no cumple ninguna condicion
*/
let signo = prompt('¿Cual es tu signo?')

switch (signo) {
    case 'piscis':
        console.log('Esto es de piscis')
        break;
    case 'cancer':
        console.log('Esto es de cancer')
        break
    case 'geminis':
    case 'géminis':
        console.log('Esto es para geminis con y sin tilde')
        break
    default: 
        console.log('Singno zodiacal no válido')

}