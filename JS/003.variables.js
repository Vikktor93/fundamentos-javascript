// GUIA CURSO INTRODUCTORIO JS - 09 DE SEPTIEMBRE 2024
// Docente: Victor Saldivia Vera
// Universidad de Los Lagos

// Variables que pueden cambiar con el tiempo
var estatura = 1.71
let peso = 60

// Constante que no pueden cambiar
const nombre = "Victor"

// OTROS EJEMPLOS
// Declarando las Variables
var edad
let ciudad

// Inicializando las Variables
edad = 29
ciudad = "Osorno"

// Declaración e Inicialización de una Variable
const apellido = "Saldivia"


// Concatenando Variables de tipo String
const nombrecompleto = nombre + " " + apellido
console.log(nombrecompleto);


// Declarando e Inicializando Variables en una Línea
// Uso Incorrecto de Declaración de Variables
let docente = 'Tomas', age = 25, asignaturas = ['IA', 'Seguridad Informática'];


//Entendiendo el concepto de Hoisting (Sólo con VAR)
console.log(n);
var n = 10;

//JavaScript interpreta el bloque de código de arriba de la siguiente manera:
/*var n;
console.log(n);
n = 10;*/