//      clase 8 Parámetros como REFERENCIA o como VALOR.
// Referencia (parametro):  modifica el valor de la variable definida en el objeto.
// Valor: Creamos un nuevo objeto dentro de la funcion en la cual se modifica el valor de la variable del objeto, pero no al objeto original.
// link referencia: https://codingornot.com/cuando-se-utiliza-paso-por-referencia-y-cuando-paso-por-valor                       

var persona ={
    nombre: 'Hernan',
    apellido:'Maza',
    edad: 23
}

// Paso por parametro-Referencia
functioncumpleaños(persona) {
    persona.edad +=1
}

//Paso por valor
//Se puede crear un objeto diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.
functioncumpleaños2(persona) {
    return{
        ...persona,
        edad: persona.edad + 1
    }
}