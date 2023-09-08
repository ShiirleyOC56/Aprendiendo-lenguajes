// FUNCION CONSTRUCTORA
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");//se crea un objeto vacio y se asigna  this

alert(user.name);
alert(user.isAdmin);

// CONSTRUCTOR DE FUNCION(codigo sin reutilizacion futura)
let userA = new function(){
    this.name = "Alcea";
    this.isAdmin = false;
}

// MÉTODOS EN CONSTRUCTOR
function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert( "Mi nombre es: " + this.name);
    };
}

let jhon = new User("Jhon");
jhon.sayHi(); // Mi nombre es Jhon