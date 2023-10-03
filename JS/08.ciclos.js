/*GUIA RÁPIDA: CONDICIONALES EN JS -  25 Septiembre 2023
Docente: Victor Saldivia Vera - Institución: Universidad de Los Lagos*/

//Ciclo While
console.log('################ WHILE ################')
let i = 0;

while (i <= 5) {
    console.log(i);
    i++;
}

//Ciclo do-While
console.log('\n################ DO-WHILE ################')

let aux = 0;
do {
    console.log(aux);
    aux++;
}
while (aux <= 3);


//Ciclo For
console.log('\n################ FOR ################')
for (let x = 1; x <= 3; x++) {
    console.log(x);
}

//Ciclo For
console.log('\n################ OMISIONES DE PARTES EN FOR ################')
let j = 0;
for (; j <= 7; j++) {
    console.log(j);
}

for (; j <= 7;) {
    console.log(j++);    //este bucle a que se parece?
}


console.log('\n################ USO DEL BREAK ################')
let suma = 0;
while (true) {

    let valor = +prompt("Ingrese un número, porfavor", '');
    if (!valor) break; // (Quiebre del ciclo)
    suma += valor;

}
alert(`La Suma es de: ${suma}`);


console.log('\n################ USO DEL CONTINUE ################')
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    alert(i); // 1, luego 3, 5, 7, 9
}




