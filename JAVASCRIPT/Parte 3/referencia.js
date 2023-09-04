//Cuando una variable de objeto es copiada, se copia solo la referencia. El objeto no es duplicado.

let user = { name: "John" };
let admin = user; // copia la referencia

// Un variable puede modificar los datos del obejto referenciado.
let userA = { name: 'John' };

let adminA = userA;

adminA.name = 'AlceaXich'; // cambiado por la referencia "admin"

alert(userA.name); // 'AlceaXich', los cambios se ven desde la referencia "user"

// Como hacer comparaciones por referencia
let a = {};
let b = a; // copia la referencia
let c = {};

alert( a == b ); // true, verdadero. Ambas variables hacen referencia al mismo objeto
alert( a === b ); // true
alert( a == c); //false

// También podemos usar el método Object.assign para clonar un objeto
// Object.assign(dest, ...sources) SINTAXIS

/* - El primer argumento dest es el objeto destinatario.
   - Los argumentos que siguen son una lista de objetos fuentes.*/


let usuario = { name: "Alcea"};

let permissions1 = { canView: true};
let permissions2 = { canEdit: true};

// Copia todas las propiedades desde permissions1 y permissions2 en usuario
Object.assign(usuario, permissions1, permissions2);

// Ahora es usuario = { name: "John", canView: true, canEdit: true}

alert(usuario.name); // John
alert(usuario.canView); // true
alert(usuario.canEdit); // true
