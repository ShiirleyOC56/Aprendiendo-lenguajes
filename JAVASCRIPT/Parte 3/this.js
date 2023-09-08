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