# Aprendiendo Javascript - Parte 4(Tipos de datos)

## Recursos

[Tipos de datos](https://es.javascript.info/data-types)

## Métodos en tipos primitivos
- Un primitivo:
  - Es un valor de tipo primitivo.
  - Hay 7 tipos primitivos: string, number, bigint, boolean, symbol, null y undefined.
  - El lenguaje permite el acceso a métodos y propiedades de strings, numbers, booleans y symbols.
- Un objeto:
  - Es capaz de almacenar múltiples valores como propiedades.
  - Puede ser creado con {}. Ejemplo: {name: "John", age: 30}. 
  - Hay otras clases de objetos en JavaScript; las funciones, por ejemplo, son objetos.
  - podemos almacenar una función como una de sus propiedades.
- Un “object wrapper” (objeto envoltorio) que provee la funcionalidad extra y luego es destruido.
  - Los “object wrappers” son diferentes para cada primitivo y son llamados: String, Number, Boolean, Symbol y BigInt. Así, proveen diferentes sets de métodos.
- Los primitivos especiales null y undefined son excepciones. No tienen “wrapper objects” correspondientes y no proveen métodos. En ese sentido son “lo más primitivo”.

## Number
- Hay 2 tipos de numeros:
  - **Números de doble precisión de coma flotante**: Los números regulares que son almacenados con formato de 64-bit IEEE-754.
  - **Números BigInt:** representan enteros de longitud arbitraria.
- Aquí _ es “azúcar sintáctica”, hace el número más legible. El motor JavaScript simplemente ignora _ entre dígitos, así que es exactamente igual al “billion” de más arriba.
- cortamos un número agregando la letra "e" y especificando la cantidad de ceros.
- En los números negativos detrás de "e" significa una división por el 1 seguido de la cantidad dada de ceros.
- Los números Hexadecimales son ampliamente usados en JavaScript para representar colores, codificar caracteres y muchas otras cosas.


