//declaracion
let arr = new Array(); //manera 1
let arr = []; //manra 2

//contar la totalidad de elementos
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3

// Un array puede almacenar elementos de cualquier tipo.
// mezcla de valores
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// obtener el objeto del índice 1 y mostrar su nombre
alert( arr[1].name ); // John

// obtener la función del índice 3 y ejecutarla
arr[3](); // hello

//La “coma final” hace más simple insertar y remover items, porque todas la líneas se vuelven similares.
let fruits = [
    "Apple",
    "Orange",
    "Plum",
  ];

//Obtener los últimos elementos con “at”
//Podemos calcular explícitamente el último índice y luego acceder al elemento: fruits[fruits.length - 1].

let fruits = ["Apple", "Orange", "Plum"];

// es lo mismo que fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum

//Métodos pop/push, shift/unshift
