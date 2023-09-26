/*GUIA RÁPIDA: OPERADORES EN JS -  10 de Julio 2023
Docente: Victor Saldivia Vera - Institución: Universidad de Los Lagos*/

//OPERANDOS Y OPERADORES
console.log('################ OPERANDOS Y OPERADORES ################');
//Operando Unario
let z = 1;
z = -z;
console.log(`El valor de z es ${z}`); // -1, se aplicó negación unaria

//Operando Binario
let x = 1, y = 3;
console.log(y - x); // 2, binario negativo resta valores

console.log('################ CONCATENACIÓN CON EL BINARIO + ################');
//Según lo visto en la clase anterior, si "2" / 2 = 1, entonces:
console.log('1' + 2); // "Resultado ???"
console.log(2 + '1'); // "Resultado ???"
console.log(1 + 1 + '2'); // "Resultado ???"
console.log('2' + 1 + 1); // "Resultado ???"

console.log('################ SUMA UNARIA Y SUMA BINARIA ################');
//Suma Unaria

//Sin efecto en números
let manzanas = 2;
console.log(+manzanas); // Resultado: 2

//Convierte los no números
console.log(+true); // 1
console.log(+false); // 0
console.log(+"");   // 0
console.log(+"4");   // 4

//¿Qué función hacia lo anterior?


/*let tomates = 30
let naranjas = 20
console.log("La suma entre los tomates y naranjas es: ", tomates + naranjas);


//Tercera Forma de Uso (Suma Unaria combinada con Suma Binaria)
let caja = "2"
let estantes = "5"
console.log(+caja);*/

suma = console.log("La suma entre las cajas y estantes es: ", +caja + +estantes);

//OPERADOR RESTA
console.log('################ OPERADOR DE RESTA ################')
console.log("La resta entre los tomates y naranjas es: ", tomates - naranjas);

//OPERADOR MULTIPLICACIÓN
console.log('################ OPERADOR DE PRODUCTO ################')
console.log("El producto entre los tomates y naranjas es: ", tomates * naranjas);

//OPERADOR DIVISIÓN
console.log('################ OPERADOR DE DIVISIÓN ################')
console.log("La División entre los tomates y naranjas es: ", tomates / naranjas);

//RESTO (%)
console.log('################ OPERADOR DE RESTO ################')
console.log(6 % 2); // 0 es el resto de 6 dividido por 2
console.log(8 % 3); // 2, es el resto de 8 dividido por 3

//POTENCIA (**)
console.log('################ OPERADOR DE EXPONENCIACIÓN ################')
console.log(2 ** 2); // 2² = 4
console.log(2 ** 3); // 2³ = 8
console.log(4 ** (1 / 2)); // 2 (potencia de 1/2 es lo mismo que raíz cuadrada)

//Asignaciones Encadenadas
console.log('################ ASIGNACIONES ENCADENADAS ################')

let a, b, c;
a = b = c = 5 + 5;

console.log(a); // 10
console.log(b); // 10
console.log(c); // 10

//Modificación en el Lugar
console.log('################ MODIFICACIÓN/ASIGNACIÓN VARIABLES (OPERADOR) ################');
let n = 1;
n = n + 9; //10

console.log(n);

n += 5; // ahora n = 15  (es lo mismo que n = n + 5)
console.log("Valor actualizado de n: ", n);
n *= 2; // ahora n = 30 (es lo mismo que n = n * 2)
console.log("Valor actualizado de n: ", n);

//Incremento / Decremento
console.log('################ INCREMENTO ################');
let contador = 1;
contador++;      // funciona igual que contador=contador+1, pero es más corto
console.log(contador); // 2

console.log('################ DECREMENTO ################');
contador--;
console.log(contador); // 1