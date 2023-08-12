/*FUNCIONES FLECHA*/
// es la version mas corta de una funcion
//let func = (arg1, arg2, ..., argN) => expression;
let func = function(arg1, arg2, ..., argN) {
    return expression;
  };

//Ejemplo
let sum = (a,b) => a+b;

/*Funciones flecha multilinea*/
let suma = (a, b) => {  // la llave abre una función multilínea
    let result = a + b;
    return result; // si usamos llaves, entonces necesitamos un "return" explícito
  };
  
  alert( suma(1, 2) ); // 3

  /*TAREAS*/

//1. Reescribe con funciones de flecha

let ask = (question, yes, no) => {
    confirm(question) ? yes():no();
};