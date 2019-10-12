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
    saludar () {
        console.log(`Hola soy ${this.nombre} ${this.apellido}`)
    }
    soyAlto()  {
        return this.altura > 1.8
    }
    
}

class Developer extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy developer`)
    }

}

// Se debe aplicar la palabra new
let hernan = new Persona('Hernan', 'Maza', 1.85)
hernan.saludar()

let arelysDeveloper = new Developer("Arelys", "Zambrano", 1.60)

//Para ejecutar el metodo saludar primero revisa en el proto de Developer, si no lo tiene revisa en el proto de Persona, 
//y asi sucesivamente hasta llegar al final Object
arelysDeveloper.saludar()

console.log(Persona.prototype)
console.log(Developer.prototype)
