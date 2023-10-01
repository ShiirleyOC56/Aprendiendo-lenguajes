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