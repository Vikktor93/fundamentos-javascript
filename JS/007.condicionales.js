/*GUIA RÁPIDA: CONDICIONALES EN JS -  10 de Julio 2023
Docente: Victor Saldivia Vera - Institución: Universidad de Los Lagos*/


// Utilizando las sentencias IF y Else
console.log('################ SETENCIAS IF/ELSE ################');

let year = prompt('¿En qué año se creo JavaScript', '');

if (year == 1995) {
    alert('¡Correcto, en el año 1995!');
} else {
    alert('Respuesta Incorrecta!'); // cualquier valor excepto 1995
}

console.log('################ SETENCIAS ELSE IF ################');
let edad = prompt('¿A que edad puedes tener licencia?', '');

if (edad >= 18) {
    alert('Correcto, a partir de los 18 años!');
} else if (edad == 17) {
    alert('Correcto, pero no puede manejar solo un menor de 17 años!');
} else {
    alert('Respuesta Incorrecta! No puede ser menor de 17 años');
}


console.log('################ OPERADOR TERNARIO ? ################');
let newPrompt = prompt('¿A qué edad puedes tener licencia?', '');

const mensaje =
    newPrompt >= 18
        ? 'Correcto, a partir de los 18 años!'
        : 'Respuesta Incorrecta! No puede ser menor de 18 años';

alert(mensaje);