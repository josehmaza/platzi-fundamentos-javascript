var persona = {
    nombre: 'Hernan',
    apellidos: 'Maza Salinas',
    edad: 34,
    peso: 89
}

// Estas constantes nos ayudan a ser mas explicitos con el significado de algunos números que se prodrían declarar magicamente....
const TOTAL_DIAS_ANIO = 365
const GRAMOS = 0.2

// Esta función es equivalente a las siguentes arrow function
/* function peso(persona) {
    persona.peso += GRAMOS
} */

// Si bien la declaración de estas arrow function retornan un valor al no estar presentes sus paréntesis, nosotros no nos interesa dicho dato, puesto que al invocarlas, no asignamos estas funciones a una variable para recuperar el valor.  Solo nos interesa modificar el objeto
const aumentarPeso = persona => persona.peso += GRAMOS
const bajarPeso = persona => persona.peso -= GRAMOS


console.log(`Al inicio de año ${persona.nombre} pesa ${persona.peso.toFixed(1)}kg.`)

// Recorremos cada dia del año
// Es necesario establecer un punto de inicio, un punto de llegada y un incremento
for(var i = 1; i <= TOTAL_DIAS_ANIO; i++) {
    // Generamos un aleatorio entre 0 y 1 para determinar si su masa corporal tiende a subir o bajar
    var random = Math.random()

    // El 25% del año esta persona tiende a bajar de peso por el calentamiento global
    // pero siempre y cuando su densidad muscular este por debajo del 0.15
    if( i < Math.ceil(TOTAL_DIAS_ANIO * 0.25) ) {
        if(random <= 0.15) {
            // Al pasar un objeto a una función se hace por referencia. Por tanto, es responsabilidad de la función si internamente muta el objeto o retorna uno nuevo 
            bajarPeso(persona)
        }
    }

    // El otro 25% del año esta persona tiende a subir de peso por las vacaciones de verano
    // pero siempre y cuando su densidad muscular este por encima del 0.85
    if( i < Math.ceil(TOTAL_DIAS_ANIO * 0.50) ) {
        if(random >= 0.85) {
            aumentarPeso(persona)
        }
    }

    // El 50% restante del año...
    // Su organizmo permanece estable. entonces no sube ni baja
}

console.warn(`Al fin de año ${persona.nombre} pesa ${persona.peso.toFixed(1)}kg.`)