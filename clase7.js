var jose = {
  nombre: 'Jose',
  apellido: 'Salinas',
  edad: 33
}

var hernan = {
  nombre: 'Hernan',
  apellido: 'Maza',
  edad: 3
}

function imprimirNombreYEdad({nombre: firstName, edad}){
    console.log(`Hola me llamo ${firstName} y tengo ${edad} años`)
}

imprimirNombreYEdad(jose)
imprimirNombreYEdad(hernan)