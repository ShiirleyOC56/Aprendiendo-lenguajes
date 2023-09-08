// COMO FUNCIONA LOS ALCANCES
// `user` tiene una referencia al objeto
/* user es una variable global que referencia a name */
let user = {
    name: "John"
  };

// Si cambiamos el valor
user = null;

/* Ahora John se vuelve inalcanzable. No hay forma de acceder a él,
 no hay referencias a él. El recolector de basura desechará los datos y liberará la memoria.*/

// DOS REFERENCIAS

let userA = {
    name: "Alcea"
};

let admin = userA;

userA = null;

// Ahora solo hay una referencia al objeto que es admin, si admin sobeescribimos como null tabien se eliminaria el objeto.
