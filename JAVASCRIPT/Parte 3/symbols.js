// SYMBOLS
let id = Symbol();

// Al crearlo, podemos agregarle una descripción (también llamada symbol name), 
//que será útil en la depuración de código:
let id = Symbol("id");

// Si creamos dos symbol con misma etiqueta, en el fondo son difeentes
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

// DONDE PODEMOS USAR LOS SYMBOLS
let user = { // pertenece a otro código
    name: "aLCEA"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;
  
  alert( user[id] ); // podemos accesar a la información utilizando el symbol como nombre de clave