/*GUIA RÁPIDA: CONDICIONALES EN JS -  03 de Octubre 2023
Docente: Victor Saldivia Vera - Institución: Universidad de Los Lagos*/

console.log('\n################ FUNCIÓN BÁSICA ################')
function mostrarMensaje() {
    alert('¡Hola a todos!');
}

//Llamando a la función
mostrarMensaje();


console.log('\n################ VARIABLES INTERNAS ################')
function varInterna() {
    let mensaje = "Hola, ¡Soy un Mensaje de una Variable Local!"; // variable local
    alert(mensaje);
}
varInterna(); // Hola, ¡Soy un Mensaje de una Variable Local!
//alert(mensaje); // ¿¡Error! La variable es local para esta función


console.log('\n################ VARIABLES EXTERNAS ################')
let nombre = 'Victor'; //variable global
function mostrarNombre() {
    let msj = '¡Hola!, ' + nombre;
    alert(msj);
}

mostrarNombre(); // ¡Hola!, Victor

//Modificando la Variable Externa
let institucion = 'Ulagos'; //variable global
function mostrarInstitucion() {
    let institucion = "Universidad de Los Lagos";
    let texto = 'Yo estudio en la ' + institucion;
    alert(texto);
}

//La función crea y utiliza su propia variable local institucion
mostrarInstitucion();
alert(institucion); //Ulagos, se mantiene, la función no accedió a la variable externa