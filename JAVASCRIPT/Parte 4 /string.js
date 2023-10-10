/* COMILLAS */
let single = 'comillas simples';
let double = "comillas dobles";

let backticks = `backticks`;

// Comillas simples y dobles son esencialmente lo mismo. En cambio, los “backticks” nos permiten además ingresar expresiones dentro del string envolviéndolos en ${…}:
function sum(a, b) {
    return a + b;
  }
  
  alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.


let guestList = `Invitados:
  * Juan
  * Pedro
  * Maria
 `;
 
alert(guestList); // una lista de invitados, en múltiples líneas

/* CARACTERES ESPECIALES */
// salto de linea
let guestList = 'Invitados:\n * Juan\n * Pedro\n * Maria';

alert(guestList); // lista de invitados en múltiples líneas, igual a la de más arriba

//length
alert(`Mi\n`.length); // 3

// Accediendo  a valores

let str = `Hola`;

// el primer carácter
alert( str[0] ); // H
alert( str.at(0) ); // H

// el último carácter
alert( str[str.length - 1] ); // a
alert( str.at(-1) );

//corchetes negativos
let str = `Hola`;

alert( str[-2] ); // undefined
alert( str.at(-2) ); // l

// for of
for (let char of 'Hola') {
  alert(char); // H,o,l,a (char se convierte en "H", luego "o", luego "l", etc.)
}

// CAMBIANDO CAPITALIZACION
alert('Interfaz'.toUpperCase()); // INTERFAZ
alert('Interfaz'.toLowerCase()); // interfaz

//Si queremos un solo carácter en minúscula:
alert('Interfaz'[0].toLowerCase()); // 'i'

//SUBCADENAS DE CARACTERES
//str.indexOf
let str = 'Widget con id';

alert(str.indexOf('Widget')); // 0, ya que 'Widget' es encontrado al comienzo
alert(str.indexOf('widget')); // -1, no es encontrado, la búsqueda toma en cuenta minúsculas y mayúsculas.

alert(str.indexOf('id')); // 1, "id" es encontrado en la posición 1 (..idget con id)

//El segundo parámetro es opcional y nos permite buscar desde la posición entregada.
let str = 'Widget con id';

alert(str.indexOf('id', 2)); // 11

//includes, startsWith, endsWith

//Es la opción adecuada si lo que necesitamos es verificar que exista, pero no su posición.

alert('Widget con id'.includes('Widget')); // true
alert('Hola'.includes('Adiós')); // false

//El segundo argumento opcional de str.includes es la posición desde donde comienza a buscar:

alert('Midget'.includes('id')); // true
alert('Midget'.includes('id', 3)); // false, desde la posición 3 no hay "id"

//Los métodos str.startsWith (comienza con) y str.endsWith (termina con) hacen exactamente lo que dicen:

alert( "Widget".startsWith("Wid") ); // true, "Widget" comienza con "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" termina con "get"

//OBTENIENDO UN SUBSTRING
let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', el substring desde 0 hasta 5 (sin incluir 5)
alert( str.slice(0, 1) ); // 's', desde 0 hasta 1, pero sin incluir 1, por lo que sólo el carácter en 0

//Si no existe el segundo argumento, entonces slice va hasta el final del string:

let str = "stringify";
alert( str.slice(2) ); // ringify, desde la 2nda posición hasta el final

let str = "stringify";
// comienza en la 4ta posición desde la derecha, finaliza en la 1era posición desde la derecha
alert( str.slice(-4, -1) ); // 'gif'

// COMPARANDO STRINGS
alert('a' > 'Z'); // true
alert('Österreich' > 'Zealand'); // true

//Existen métodos especiales que permiten obtener el carácter para el código y viceversa.

//str.codePointAt(pos)
//Devuelve un número decimal que representa el código de carácter en la posición pos:

// mayúsculas y minúsculas tienen códigos diferentes
alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert( "z".codePointAt(0).toString(16) ); // 7a (si necesitamos el valor del código en hexadecimal)

//String.fromCodePoint(code)
//Crea un carácter por su código numérico:

alert( String.fromCodePoint(90) ); // Z
alert( String.fromCodePoint(0x5a) ); // Z (también podemos usar un valor hexa como argumento)