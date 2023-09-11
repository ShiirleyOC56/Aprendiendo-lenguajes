// PROBLEMA DE LA PROPIEDAD QUE NO EXISTE

let user = {}; // usuario sin propiedad "address"
//
alert(user.address.street); // Error!

// ENCADENAMIENTO OPCIONAL ?.
let user = {}; // El usuario no tiene dirección

alert( user?.address?.street ); // undefined (no hay error)