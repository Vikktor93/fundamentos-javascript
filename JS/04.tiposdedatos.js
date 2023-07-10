/*GUIA RÁPIDA: TIPOS DE DATOS EN JS -  03 DE JULIO 2023
Docente: Victor Saldivia Vera - Institución: Universidad de Los Lagos*/

//NUMBERS
let edad = 29;
let sueldo = 1200000;
const PI = 3.14;

//Con Notación Cientifica
const n_grande = 1e6; // 1 millón
const n_pequeno = 1e-6; // 0.000001

console.log(n_grande)
console.log(n_pequeno)

//BigInt
const bigInt = 1234567891234567891234567891234567890n;
console.log(bigInt)

//Infinity
console.log(edad / 0);

//¿Es posible esto?
console.log("2" / 2);

//NaN (Error de Cálculo)
alert("Hola" / 2); // NaN, tal división es errónea

//STRINGS
console.log('################ STRINGS ################')
let string1 = "Hola ¿Cómo estás?";
let string2 = '¡Buenas Tardes!';
let frase = `Este es un saludo: ${string1}`;

console.log(frase)

//BOOLEANS
// Asignación de booleanos a variables
console.log('################ BOOLEANS ################')
let V = true;
let F = false;

//Ejemplo de un Ciclo:
if (V) {
    //Se ejecuta si el valor es True
    console.log("Es Verdadero");
} else {
    //Se ejecuta si el valor es false
    console.log("Es Falso");
}


//NULL
console.log('################ NULL ################')
let numero_nuevo = null
console.log(numero_nuevo)


//UNDEFINED
console.log('################ UNDEFINED ################')
let institución;
console.log(institución) //arroja como valor undefined


//OBJECT Y SYMBOL
//Almacenan colecciones de Datos

//Hay 2 formas de crear un objeto
console.log('################ OBJETOS ################')
let user = new Object(); // sintaxis de "constructor de objetos"
let user1 = {};  // sintaxis de "objeto literal"

//Objeto Literal
let usuario = {          // un objeto
    name: "Mateo",      // En la clave "name" se almacena el valor "Mateo"
    age: 30,           // En la clave "age" se almacena el valor 30
    city: "Osorno",    // En la clave "city" se almacena el valor "Osorno"
    "correo electronico": "mateo@gmail.com",   // Se puede agregar claves con espacios utilizando comillas
};

//Agregando una propiedad nueva al Objeto Literal (En este caso un Booleano)
usuario.estado = true;

//Accediendo a una propiedad del objeto (No sirve para acceder a propiedad de más de 2 palabras)
console.log(usuario);

//Accediendo a una propiedad con más de 2 palabras en su clave
console.log(usuario["correo electronico"]);

//Eliminando una propiedad del objeto
delete usuario.estado;


//Si deseo saber el tipo de dato
console.log('################ SABER EL TIPO DE DATO ################')
console.log(typeof edad);

//Transformar un dato a String
//Transformando la Variable edad de Number a String
console.log('################ TRANSFORMANDO DE STRING A NUMBER ################')
console.log(typeof edad);
edad = String(edad)
console.log(typeof edad)

//Transformar un dato a Number
let stock = "1000"
console.log('################ TRANSFORMANDO DE NUMBER A STRING ################')
console.log(typeof stock)

stock = Number(stock)
console.log(typeof stock)
