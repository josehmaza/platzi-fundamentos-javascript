// CLase 24: 
//Auxiliar function to inhiterance
function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){}
    fn.prototype =prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}
class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar (fn) {
        let {nombre, apellido} = this
        console.log(`Hola soy ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }
    soyAlto()  {
        return this.altura > 1.8
    }
    
}

class Developer extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        let {nombre, apellido} = this
        console.log(`Hola soy ${nombre} ${apellido} y soy developer`)
        if(fn) {
            fn(nombre, apellido, true)
        }
    }

}
const responderSaludo = (nombre, apellido, isDev) => {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(isDev){
        console.log('Ah mirá, no sabia q eras developer')
    }
}

// Se debe aplicar la palabra new
let hernan = new Persona('Hernan', 'Maza', 1.85)
let andres = new Persona('Andres', 'Paredes', 1.65)

let arelysDeveloper = new Developer("Arelys", "Zambrano", 1.60)
// Si no envio la funcion como parametro llegara como undefined
hernan.saludar()
andres.saludar(responderSaludo)
arelysDeveloper.saludar(responderSaludo)
