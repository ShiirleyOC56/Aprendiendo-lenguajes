// Para una conversión de objeto a string, cuando hacemos una operación que espera un string en un objeto
// salida
alert(obj);

// utilizando un objeto como clave
anotherObj[obj] = 123;

//Para una conversión de objeto a número:
// conversión explícita
let num = Number(obj);

// matemáticas (excepto + binario)
let n = +obj; // + unario
let delta = date1 - date2;

// comparación menor que / mayor que
let greater = user1 > user2;

// Hay un símbolo incorporado llamado Symbol.toPrimitive que debe utilizarse para nombrar el método de conversión

obj[Symbol.toPrimitive] = function(hint) {
    // aquí va el código para convertir este objeto a un primitivo
    // debe devolver un valor primitivo
    // hint = "sugerencia", uno de: "string", "number", "default"
  };