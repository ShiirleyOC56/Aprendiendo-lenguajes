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
