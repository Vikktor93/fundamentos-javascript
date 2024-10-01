// GUIA CURSO INTRODUCTORIO JS - 01 DE OCTUBRE   2024
// Docente: Victor Saldivia Vera
// Universidad de Los Lagos

console.log('\n################ FUNCIÓN BÁSICA (FUNCIÓN POR DECLARACIÓN) ################')
function mostrarMensaje() {
    console.log('¡Hola a todos!');
}

//Llamando a la función
mostrarMensaje();

console.log('\n################ FUNCIONES POR EXPRESIONES ################')
const saludo = function saludar() {
    return "Hola";
}

saludo(); //Hola

console.log('\n################ VARIABLES INTERNAS ################')
function varInterna() {
    let mensaje = "Hola, ¡Soy un Mensaje de una Variable Local!"; // variable local
    console.log(mensaje);
}
varInterna(); // Hola, ¡Soy un Mensaje de una Variable Local!
alert(mensaje); // ¿¡Error! La variable es local para esta función


console.log('\n################ VARIABLES EXTERNAS ################')
let nombre = 'Victor'; //variable global
function mostrarNombre() {
    let msj = '¡Hola!, ' + 'mi nombre es ' + nombre;
    console.log(msj);
}

mostrarNombre(); // ¡Hola!, Victor

//Modificando la Variable Externa
let institucion = 'Ulagos'; //variable global
function mostrarInstitucion() {
    let institucion = "Universidad de Los Lagos";
    let texto = 'Yo estudio en la ' + institucion;
    console.log(texto);
}

//La función crea y utiliza su propia variable local institucion
mostrarInstitucion();
alert(institucion); //Ulagos, se mantiene, la función no accedió a la variable externa