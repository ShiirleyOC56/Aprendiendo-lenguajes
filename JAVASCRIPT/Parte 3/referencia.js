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

//CLONACION SIMPLE
let userb = {
   name: "John",
   age: 30
 };
 
 let clone = Object.assign({}, userb);
 
 alert(clone.name); // John
 alert(clone.age); // 30

 //CLONACION ANIDADA
 let clonacion_anidada = {
   name: "Alcea",
   sizes: {
      height: 182,
      window:50,
   }
 };

 alert(clonacion_anidada.sizes.height); // 182

 //COMO USAR EL structuredClone(object)
 let ejem = {
   name: "Alcea",
   sizes: {
      height: 182,
      width: 50
   }
 };

 let struc_clone = structuredClone(ejem);

 alert( ejem.sizes === struc_clone.sizes); //false, objetos diferentes

 // ahora user y clone están totalmente separados
 ejem.sizes.width = 60;    // cambia una propiedad de un lugar
 alert(struc_clone.sizes.width); // 50, no están relacionados
