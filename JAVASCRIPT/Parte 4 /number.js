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