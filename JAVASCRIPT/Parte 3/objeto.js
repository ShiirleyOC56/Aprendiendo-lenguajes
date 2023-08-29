// COMO CREAR UN OBJETO VACIO
let userA = new Object(); // sintaxis de  "constructor de objetos"
let userB = {}; // sintaxis de "objeto literal"

// LAS PROPIEDADES SE PONEN DENTRO DEL {...} COMO "CLAVE:VALOR"
let userC = { //un objeto
    name: "AlceaXich", // En la clave name se almacena el valor de AlceaXich
    age: 30 // En la clave age se almacena el valor 30
};

// COMO ACCEDEMOS A LOS VALORES DE LOS OBJETOS
alert(userC.name); //Alcexich
alert(userC.age); //30

// AGREGANDO AL OBJENTO UN VALOR BOOLEANO
let userD = {
    name: "SecondName",
    age: 20,
    isAdmin: True
}

// PARA ELIMINAR UNA PROPIEDAD  SE UDA EL OPERADOR DELETE
delete userA.age;

// ASIGNANDO CON CLAVES DE MAS DE UN PALABRA
let userF = {
    name: "John",
    age: 30,
    "likes birds": true  // Las claves con más de una palabra deben ir entre comillas
  };

userF["likes birds"] = true;// asignando
alert(userF["likes birds"]); // obteniendo el valor
delete userF["likes birds"];