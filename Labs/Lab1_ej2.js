// Solicitar la contraseña al usuario
let password = prompt("Ingresa una contraseña:");

// Criterios de validación
const longitudMinima = 8;
const regexMayuscula = /[A-Z]/; // Al menos una letra mayúscula
const regexNumero = /[0-9]/;    // Al menos un número
const regexEspecial = /[!@#$%^&*()_+\-{}\[\]:;<>.,?~\\]/; // Al menos un carácter especial

// Bandera para determinar si la contraseña es válida
let esValida = true;

// Se verifica cada criterio y se muestra un mensaje de error en la consola si no se cumple
if (password.length < longitudMinima) {
    console.log("Debe tener al menos 8 caracteres.");
    esValida = false;
}

if (!regexMayuscula.test(password)) {
    console.log("Debe contener al menos una letra mayúscula.");
    esValida = false;
}

if (!regexNumero.test(password)) {
    console.log("Debe contener al menos un número.");
    esValida = false;
}

if (!regexEspecial.test(password)) {
    console.log("Debe contener al menos un carácter especial.");
    esValida = false;
}

// Si no se cumplió algún criterio, se considera que la contraseña no es válida
if (esValida) {
    alert("¡La contraseña es válida!");
} else {
    alert("La contraseña no cumple con uno o más requisitos. Revisa la consola para más detalles");
}
