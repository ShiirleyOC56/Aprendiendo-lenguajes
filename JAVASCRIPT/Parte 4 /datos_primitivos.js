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

