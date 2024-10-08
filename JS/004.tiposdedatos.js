// GUIA CURSO INTRODUCTORIO JS - 09 DE SEPTIEMBRE 2024
// Docente: Victor Saldivia Vera
// Universidad de Los Lagos

// NUMBERS
let edad = 29;
let sueldo = 1200000;
const PI = 3.14;

// Con Notación Cientifica
const x = 1000000;
const n_grande = 1e6; // 1 millón
const n_pequeno = 1e-6; // 0.000001

console.log(n_grande)
console.log(n_pequeno)

// BigInt
const bigInt = 1234567891234567891234567891234567890n;
console.log(bigInt);

// Infinity
console.log(edad / 0);
console.log(-Infinity);

// ¿Es posible esto?
console.log("2" / 2);

// NaN (Error de Cálculo)
console.log("Hola" / 2); // NaN, tal división es errónea
console.log("Hola" * 4);

// STRINGS
console.log('################ STRINGS ################')
let nombre = "Victor";
let ciudad = "Osorno";
let capital = "Puerto Montt"
let string1 = "Hola ¿Cómo estás?";
let string2 = '¡Buenas Tardes!';
let frase = `Este es un saludo: ${string1}`; //Backticks

// IMPRESIÓN DE VARIABLES DENTRO DE STRINGS

// Impresión Utilizando Backticks
console.log(frase)
console.log(`Mi nombre es: ${nombre}`);


// Utilizando el operador + de concatenación
console.log(ciudad + " y " + capital + " pertenecen a la Región de Los Lagos ");

// Operador con Comas
console.log('Mi nombre es ', nombre);
console.log(capital, "es la capital de la Región de Los Lagos");

// Utilizando el Método concat
console.log("Mi nombre es ".concat(nombre, "y vivo en ", ciudad));


//BOOLEANS
// Asignación de booleanos a variables
console.log('################ BOOLEANS ################');
let V = true;
let F = false;

// Ejemplo de un Ciclo:
if (V) {
    //Se ejecuta si el valor es True
    console.log("Es Verdadero");
} else {
    //Se ejecuta si el valor es false
    console.log("Es Falso");
}


// NULL
console.log('################ NULL ################');
let numero_nuevo = null;
console.log(numero_nuevo);

// UTILIZANDO NULL
let dato = null;
if (dato === null) {
    console.log('¡OK!');
}

// UNDEFINED
console.log('################ UNDEFINED ################');
let institución;
console.log(institución) //arroja como valor undefined

// DIFERENCIA ENTRE NULL Y UNDEFINED
let caja = null; // la variable caja esta vacia
let noAsignado;

console.log(caja); // null
console.log(noAsignado); // undefined

// SYMBOL
console.log('################ SYMBOL ################');
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // Falso, cada símbolo es único


// OBJECT
// Almacenan colecciones de Datos

// Hay 2 formas de crear un objeto
console.log('################ OBJETOS ################')
let user = new Object(); // sintaxis de "constructor de objetos" (No se suele ocupar a menudo)
let usuario = {};  // Objeto literal (Objeto Vacío)

// Objeto Literal
usuario = {          // un objeto
    name: "Mateo",      // En la clave "name" se almacena el valor "Mateo"
    age: 30,           // En la clave "age" se almacena el valor 30
    city: "Osorno",    // En la clave "city" se almacena el valor "Osorno"
    "correo electronico": "mateo@gmail.com"   // Se puede agregar claves con espacios utilizando comillas
};

// Accediendo a una propiedad del objeto (Propiedad Nombre)
console.log(usuario.name);

// Accediendo a una propiedad con más de 2 palabras en su clave (Propiedad Correo)
console.log(usuario["correo electronico"]);

// Agregando nuevas propiedades al Objeto Literal (Notación con Puntos)
usuario.provincia = "Provincia de Osorno";
usuario.estado = true;
usuario.pais = "Chile";
usuario.genero = "Masculino";

// Agregando nuevas propiedades al Objeto Literal (Notación con Corchetes)
usuario["estado_civil"] = "Soltero"

// Eliminando una propiedad del objeto
delete usuario.estado;

// Impresión del Objeto Actualizado
console.log(usuario);

// Si deseo saber el tipo de dato
console.log('################ SABER EL TIPO DE DATO ################')
console.log(typeof nombre);

// Transformando la Variable edad de Number a String
console.log('################ TRANSFORMANDO DE NUMBER A STRING ################')
console.log(typeof edad);
edad = String(edad)
console.log(typeof edad)

// Transformar un String a Number
let stock = "1000"

console.log('################ TRANSFORMANDO DE STRING A NUMBER ################')
console.log(typeof stock)

console.log(stock)
stock = Number(stock)
console.log(typeof stock)
console.log(stock)

