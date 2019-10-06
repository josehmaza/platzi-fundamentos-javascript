// CLase 20: COmo funcionan las clases en javascript
const Persona = function(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = 1.82
    
}
// Esto no puedo ir dentro de la declaracion del functino Persona
// Debe ser estrictamente con function
Persona.prototype.saludar = function () {
    console.log(`Hola soy ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function()  {
    return this.altura > 1.8
}

//Clase 21: El contexto de las funciones: quién es this
//Cuando uso arrow functions, esto reemplaza el this x el this externo, es decir el this(dentro del arrow function) = this fuera del arrow functinos
//Persona.prototype.soyAlto = () => {
//    return this.altura > 1.8
//}
// this // Esto es lo que se reemplazara el contexto this dentro del arrow function

// Se debe aplicar la palabra new
let hernan = new Persona('Hernan', 'Maza', 1.85)

hernan.saludar()
console.log(hernan.soyAlto())