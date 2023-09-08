//ACCIONES EN JAVASCRIPT
let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {
    alert("¡Hola!");
  };
  
  user.sayHi(); // ¡Hola!

// tambien puede ser de esta forma
let user = {
    // ...
  };
  
  // primero, declara
  function sayHi() {
    alert("¡Hola!");
  };
  
  // entonces la agrega como un método
  user.sayHi = sayHi;
  
  user.sayHi(); // ¡Hola!

//FORMA ABREVIADAS
// estos objetos hacen lo mismo

user = {
    sayHi: function() {
      alert("Hello");
    }
  };
  
  // la forma abreviada se ve mejor, ¿verdad?
  user = {
    sayHi() {   // igual que "sayHi: function(){...}"
      alert("Hello");
    }
  };

  //THIS
let user = {
    name: "John",
    age: 30,

    sayHi() {
        // "this" es el "objeto actual" - tis es tratado como user
        alert(this.name);
    }

};

user.sayHi(); // John

//FUNCIONES FLECHA

let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };
  
  user.sayHi(); // Ilya

// THIS NO ES VINCULADO
let user = {
  name: "Alcea"
};

let admin = {
  name: "Admin"
};

function diHola(){
  alert( this.name );
}

// usando la misma funcion
user.f = diHola;
admin.f = diHola;

// estos llamados tienen diferente "this"
// "this" dentro de la función es el objeto "antes del punto"
user.f(); // Alcea  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (punto o corchetes para acceder al método, no importa)

// TAREAS

//Usando el "this" en un objeto literal

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // ¿Cuál es el resultado? EL RESULTADO ES JHON NOO
// sale error ya que el this es undefined

//SOLUCION
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John   porque user.ref() es un método. Y el valor de this es establecido al del objeto delante del punto ..

/*Crea una calculadora
importancia: 5
Crea un objeto calculator con tres métodos:

read() pide dos valores y los almacena como propiedades de objeto con nombres a y b.
sum() devuelve la suma de los valores almacenados.
mul() multiplica los valores almacenados y devuelve el resultado.*/

let calculator = {
  read() {
    this.a = +prompt("a", 0);
    this.b = +prompt("b", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

/*Encadenamiento
importancia: 2
Hay un objeto ladder que permite subir y bajar:*/
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;  // con esto devolvemos el objeto mismo desde cada llamado.
  },
  down() {
    this.step--;
    return this; // con esto devolvemos el objeto mismo desde cada llamado.
  },
  showStep: function() { // muestra el peldaño actual
    alert( this.step );
    return this; // con esto devolvemos el objeto mismo desde cada llamado.
  }
};

ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0