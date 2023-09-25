/* FORMAS DE ESCRIBIR UN NUMERO */

let billion1 = 1000000000;

// DATO IMPORTANTE: Aquí _ es “azúcar sintáctica”, hace el número más legible.
let billion2 = 1_000_000_000;

// 1 billion, literalmente: 1 y 9 ceros
let billion3 = 1e9;  
alert( 7.3e9 );  // 7.3 billions (tanto 7300000000 como 7_300_000_000)

// En otras palabras, "e" multiplica el número por el 1 seguido de la cantidad de ceros dada.
1e3 === 1 * 1000; // e3 significa *1000
1.23e6 === 1.23 * 1000000; // e6 significa *1000000

//Numeros pequeño
let mсs = 0.000001;
let mcs = 1e-6; // cinco ceros a la izquierda de 1

// usando e
// -3 divide por 1 con 3 ceros
1e-3 === 1 / 1000; // 0.001

// -6 divide por 1 con 6 ceros
1.23e-6 === 1.23 / 1000000; // 0.00000123

// un ejemplo con un número mayor
1234e-2 === 1234 / 100; // 12.34, el punto decimal se mueve 2 vece

/* Números hexadecimales, binarios y octales*/
alert( 0xff ); // 255
alert( 0xFF ); // 255 (lo mismo en mayúsculas o minúsculas )

//Los sistemas binario y octal son raramente usados, 
//pero también soportados mediante el uso de los prefijos 0b y 0o:

let a = 0b11111111; // binario de 255
let b = 0o377; // octal de 255

alert( a == b ); // true, el mismo número 255 en ambos lados

/* TO STRING */
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

/* Tests: isFinite e isNaN */
//isNaN(value) convierte su argumento a número entonces testea si es NaN:

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true
alert( NaN === NaN ); // false

//isFinite(value) convierte su argumento a un número y devuelve true si es un número regular, no NaN/Infinity/-Infinity:

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, porque es un valor especial: NaN
alert( isFinite(Infinity) ); // false, porque es un valor especial: Infinity

/* PARSEINT - PARSEFLOAT */
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, devuelve solo la parte entera
alert( parseFloat('12.3.4') ); // 12.3, el segundo punto detiene la lectura

//Hay situaciones en que parseInt/parseFloat devolverán NaN. Ocurre cuando no puedo encontrar dígitos:

alert( parseInt('a123') ); // NaN, el primer símbolo detiene la lecturaS

/* OTRAS FUNCIONES MATEMATICAS */

//Math.random()
//Devuelve un número aleatorio entre 0 y 1 (no incluyendo 1)

alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (cualquier número aleatorio)

//Math.max(a, b, c...) y Math.min(a, b, c...)
//Devuelven el mayor y el menor de entre una cantidad arbitraria de argumentos.

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1

//Math.pow(n, power)
//Devuelve n elevado a la potencia power dada

alert( Math.pow(2, 10) ); // 2 elevado a la potencia de 10 = 1024
