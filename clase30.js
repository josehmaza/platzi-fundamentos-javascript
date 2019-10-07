// Clase 30: 'ORDEN Y ASINCRONISMO'
// - Tomaremos como referencia el codigo de la clase anterior
//
// - En la clase anterior hemos podido presenciar lo que es el
//   'Asincronismo en JavaScript' cuando hacemos 'requests'
//   (solicitudes), que a pesar de invocar a las funciones en el
//   orden que queremos que aparezcan, no siempre va a ser asi.
//
// - En esta clase lo que se quiere es que aparezcan en el orden
//   en la que se invoca la funcion. Para eso utilizaremos los
//   'Callbacks',pero esta vez ya no con 'setTimeout()' .

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const Options = { crossDomain:true }

// - Primero, el cambio que hicimos es agregar y declarar un
//   segundo parametro cuyo nombre es 'callback'.
function obtenerPersonaje(id,callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
// - Segundo, el cambio que hicimos fue que en vez declarar una variable que
//   contenga a la funcion anonima, la funcion anonima va declarada como 3er
//   parametro en el '$.get()'.
//
// - Ademas, dentro de la 'funcion anonima' se va a ejecutar un 'if' cuando
//   exista una funcion que se haya pasado como parametro.
  $.get(url,Options, function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)

      if(callback){
        callback()
      }

  })
}

// - Que es lo que nos dice este codigo de invocacion:
//   "Se invoca la funcion 'obtenerPersonaje', cuyo primer parametro
//    es 1 y lo utiliza para traer el primer personaje de Star Wars.
//    Luego, utiliza el segunda parametro , que es una funcion, para
//    ver si existe o no , para poder ejecutar la funcion que contiene
//    a la misma funcion 'obtenerPersonaje' pero con parametro inicial 2
//    y asi sucesivamente."
obtenerPersonaje(1 ,function(){
  obtenerPersonaje(2,function () {
      obtenerPersonaje(3,function () {
          obtenerPersonaje(4,function () {
              obtenerPersonaje(5,function () {
                  obtenerPersonaje(6,function () {
                      obtenerPersonaje(7)
                  })
              })
          })
      })
  })
})
// - A esta forma de codigo que estamos haciendo se le denomina
//   callbackHell(Infierno de as devoluciones de llamada).