/*GUIA RÁPIDA: CONDICIONALES EN JS -  11 de Octubre 2023
Docente: Victor Saldivia Vera - Institución: Universidad de Los Lagos*/

//Longitud de Cadena de Texto
let txt = "Hola Mundo!";
let longitud = txt.length;
console.log(longitud);

//Obtención de carácter de una posición especifica
let lenguaje = "JavaScript";
let primerCaracter = lenguaje.charAt(0);
console.log(primerCaracter); // Primera posición se encuentra "J"

//Devuelve una subcadena desde especificando un inicio y fin
let frase = "¡Hola!, ¿Cómo estás?";
let subcadena = frase.substring(0, 6);
console.log(subcadena); // "¡Hola!"

//Similar a substring(), Devuelve una subcadena desde un inicio hasta un fin. Puede manejar índices negativos
let txt2 = "Universidad de Los Lagos";
let otracadena = txt2.slice(0, -12);
console.log(otracadena); // "Universidad"

//Reemplazando una subcadena por otra en la cadena original
let texto3 = "Estamos en la Universidad de Los Lagos";
let newTxt = texto3.replace("Universidad de Los Lagos", "Ulagos");
console.log(newTxt); // "Universidad de Los Lagos por Ulagos

const txt4 = "Manzana,Naranja,Uva";
const frutas = txt4.split(",");
console.log(frutas) // ["Manzana", "Naranja", "Uva"]
