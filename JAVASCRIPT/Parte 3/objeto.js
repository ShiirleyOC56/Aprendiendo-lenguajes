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

//ATAJO DE PROPIEDADES}
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        //otras propiedades
    };
}

let usuario = makeUser("AlceaXich",20);
alert(usuario.name); // AlceaXich

//---------------------------
function makeUser2(name, age, surname){
    return {
        name,
        age,
        surname: "Xich",
    };
}

// USANDO PALABRAS RESERVADAS EN LAS PROPIEDADES DE UN OBJETO

let obj = {
    for: 1,
    let: 2,
    return: 3,
};

alert(obj.for + obj.let + obj.return); //6

//PROBAR SI EXISTE UNA PROPIEDAD EN EL OBJETO
let u = {};

alert(u.noSuchProperty === undefined); // true significa que no existe tal propiedad

// EL OPERADOR IN TAMBINE SE PUEDE USAR PARA SABER SI EXISTE UNA PROPIEDAD O NO

let us = {
    name: "Alcea",
    edad: 12,
}
//el nombre de la priedad va en comillas
alert("edad" in us); //true
alert("blabla" in us); //false

//BUCLE FOR IN PARA RECORRER LAS CLAVES DE UN OBJETO

let usua = {
    name: "Alcea",
    edad: 12,
    isAdmin: true,
};

for (let  key in usua){
    alert(key);// name, edad, isAdmin
    alert(user[key]); //Alcea, 12, true
}

// TAREAS

// Crear un objeto vacio
let obj1 = {};
// Agregar la propiedad name y un valor
let person = {
    name:"Jhon",
};
//Agregar la propiedad surname
let person1 = {
    name:"Jhon",
    surname:"Smith",
};
//Cambiar el valor de name a Pete
person1.name = "pete";
//Eliminar la propiedad name
delete person1.name;

//Verificar vacios
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}

//suma de propiedades de u objeto

let salaries = {
    Jhon: 100,
    Ann: 160,
    Pete: 130,
}
let sum = 0;
for (let key in salaries){
    sum += salaries[key];
}

alert(sum);

//multiplicar propiedades nuericas por 2
let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
  };

function multiplyNumeri(menu){
    for (let key in menu){
        if(typeof(menu[key])== 'number'){
            menu[key]=menu[key]*2;
        }
    }
}