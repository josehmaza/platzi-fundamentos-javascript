var hernan = {
  nombre: 'Hernan',
  apellido: 'Maza',
  edad: 25,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es: `)

  if (persona.ingeniero === true){
    console.log('Ingeniero')
  }

  if (persona.cocinero === true){
    console.log('cocinero')
  } else {
    console.log('No es cocinero')
  }

  if (persona.cantante === true){
    console.log('cantante')
  }

  if (persona.dj === true){
    console.log('dj')
  }

  if (persona.guitarrista === true){
    console.log('guitarrista')
  }

  if (persona.drone === true){
    console.log('Jugador Profesional')
  }

}


function imprimirSiesMayorDeEdad(persona){
    if(persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}