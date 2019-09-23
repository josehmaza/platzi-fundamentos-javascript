var jesus = {
    nombre: 'Jesus',
    apellido: 'Castellanos',
    edad: 28
};

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad :27
};

function imprimirNombreEnMayusculas({ nombre, apellido: ape }){
    console.log(`${nombre.toUpperCase()} ${ape}`);
}

imprimirNombreEnMayusculas(jesus);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre: 'pepito'});