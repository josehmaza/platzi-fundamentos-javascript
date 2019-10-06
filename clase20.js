// CLase 20: COmo funcionan las clases en javascript
const Persona = function(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
    
}
// Esto no puedo ir dentro de la declaracion del functino Persona
// Debe ser estrictamente con function
Persona.prototype.saludar = function () {
    console.log(`Hola soy ${this.nombre} ${this.apellido}`)
}
let hernan = new Persona('Hernan', 'Maza')

hernan.saludar()