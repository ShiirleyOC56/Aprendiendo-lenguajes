/* OBJECT WRAPPERS */

//El método str.toUpperCase() que devuelve un string en mayúsculas.

let str = "Hello";
alert( str.toUpperCase() ); // HELLO

/* TAREA */

//¿Puedo agregar una propiedad a un string?
//Considera el siguiente código:

let str = "Hello";

str.test = 5;

alert(str.test);

//Qué piensas: ¿funcionará? ¿Qué mostrará? :C
/* Depende de si usas el modo estricto “use strict” o no, el resultado será:

undefined (sin strict mode)
Un error. (strict mode) */

/* El método num.toString(base) */
// La base puede variar entre 2 y 36. La predeterminada es 10.
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

/* REDONDEO */
//Math.floor - redondea a piso 
let floor = 3.1;
alert(Math.floor(floor)); // 3

//Math.ceil - redondea hacia arriba
let ceil = 3.4;
alert(Math.ceil(ceil)); // 4
let ceil1 = -1.1;
alert(Math.ceil(ceil1)); //-2

//Math.round - redondea hacia el entero mas cercano
let round = 3.3;
alert(Math.round(round));// 4
let round1 = 3.5;
alert(Math.round(round1));// 4
let round2 = 3.7;
alert(Math.round(round2));// 4

//Math.trunc - remueve lo que haya tras el punto decimal sin redondear
let trunc = 3.3;
alert(Math.trunc(trunc)); // 3
let trunc1 = -1.1;
alert(Math.trunc(trunc1)); // -1

/* Pero ¿si quisiéramos redondear al enésimo n-th dígito tras el decimal?*/
// Multiplicar y dividir.
let num = 1.23456;

alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

// El método toFixed(n) redondea el número a n dígitos después del punto decimal y devuelve una cadena que representa el resultado.
// Redondea hacia arriba o abajo al valor más cercano
let num = 12.34;
alert( num.toFixed(1) ); // "12.3"

let num = 12.36;
alert( num.toFixed(1) ); // "12.4"

let num = 12.34;
alert( num.toFixed(5) ); // "12.34000", con ceros agregados para dar exactamente 5 dígitos



