# Aprendiendo Javascript - Parte 3(Objetos lo basico)

## Objetos
- Los objetos son usados para almacenar colecciones de varios datos y entidades más complejas asociados con un nombre clave. 
- Los objetos son usados para almacenar colecciones de varios datos y entidades más complejas asociados con un nombre clave. 
- Imagen referencial al crear un objeto
  ![Objeto vacio](./../images/objeto_vacio.png)
- La declaracion de un objeto literal, se usa llave {...}.
- Dentro de las {...} se puede poner algunas propiedades.
- Asi quedaria un objeto creado, podemos agregar, eliminar y leer archivos de él en cualquier momento.
  ![Objeto vacio](./../images/objeto_vacio.png)
- Las claves con más de una palabra deben ir entre comillas. Ejem: "likes birds": true .
- Para acceder a claves de mas de una palabra se usa los corchetes.
- La última propiedad en la lista puede terminar con una coma, se llama una coma “final” o “colgante”. 
- Para hacer mas corta la creacion de propiedades, se utiliza el atajo de propiedades.
- Los nombres de las propiedades pueden ser igual a la de una palabra reservada, **no tiene restrinccion**.
- La lectura de una propiedad no existente solo devuelve "undefined".
- Para probar si una prpiedade existe se puede usar ".noSuchProperty".
- Para recorrer las claves de un objeto se puede usar el bucle "for...in".

## Referencias de objetos y copia
- Los objetos son almacenados y copiados "por referencia".
- Los primitivos: strings, number, boolean, etc.; son asignados y copiados “como un valor completo”.
- Una variable no almacena el objeto mismo sino su “dirección en memoria”, en otras palabras “una referencia” a él.
- Podemos usar cualquiera de las variables para acceder al objeto y modificar su contenido.
- Dos objetos son iguales solamente si ellos son el mismo objeto.
- Para clonar un objeto se puede usar el método Object.assign.
- En las clonaciones anidadas, las propiedades pueden ser referencias a otros objetos.
- La llamada a structuredClone(object) clona el object con todas sus propiedadas anidadas.
- El método structuredClone puede clonar la mayoría de los tipos de datos, como objetos, arrays, valores primitivos.

## Recoleccion de basura
-  Los valores “alcanzables” son aquellos que se pueden acceder o utilizar de alguna manera: Se garantiza que serán conservados en la memoria.
-  Hay un proceso en segundo plano en el motor de JavaScript que se llama recolector de basura. Este proceso monitorea todos los objetos y elimina aquellos que se han vuelto inalcanzables.
-  Las referencias salientes no importan. Solo los entrantes pueden hacer que un objeto sea accesible. 
-  Es posible que toda la isla de objetos interconectados se vuelva inalcanzable y se elimine de la memoria.

## Metodo del objeto "this"
- Las acciones son representadas en JavaScript por funciones en las propiedades.
- Para acceder al objeto, un método puede usar la palabra clave this.
- Las funciones de flecha son especiales: ellas no tienen su “propio” this. 
- This no es vinculado. Puede ser usado en cualquier función, incluso si no es el método de un objeto.

## Constructor, operador "new"
- Su proposito principal es implementar código de creación de objetos re-utilizables.
- La función constructora es técnicamente una función normal. Hay convenciones:
  - La primera letra es mayuscula.
  - Sólo deben ejecutarse con el operador "new". 
- Si hay muchas lineas de codigo se puede agrupar en un constructor de funcion. **Nota** (codigo sin reutilizacion futura)
- En el constructor se puede agregar a this no sólo propiedades, sino también métodos.

## Encadenamiento opcional '?.'
- Esta es una adición reciente al lenguaje.
- El encadenamiento opcional ?. es una forma a prueba de errores para acceder a las propiedades anidadas de los objetos, incluso si no existe una propiedad intermedia.
- El encadenamiento opcional ?. detiene la evaluación y devuelve undefined si el valor antes del ?. es undefined o null.
- No se debe abusar del encadenamiento opcional.
- obj?.prop – devuelve obj.prop si obj existe, si no, undefined.
- obj?.[prop] – devuelve obj[prop] si obj existe, si no, undefined.
- obj.method?.() – llama a obj.method() si obj.method existe, si no devuelve undefined.

## Tipo Symbol
- Solo dos de los tipos primitivos pueden servir como clave de propiedad de objetos: string o symbol.
- El valor de “Symbol” representa un identificador único.
- La descripción dentro de Symbl("etiqueta") es solamente una etiqueta que no afecta nada más.
- Symbols no se autoconvierten a String.
- Los Symbols nos permiten crear propiedades “ocultas” en un objeto, a las cuales ninguna otra parte del código puede accesar ni sobrescribir accidentalmente.

## Conversión de objeto a valor primitivo
- Solo hay conversiones numéricas y de strings.
- La conversión numérica ocurre cuando restamos objetos o aplicamos funciones matemáticas.
  - Por ejemplo, los objetos de tipo Date (que se cubrirán en el capítulo Fecha y Hora) se pueden restar, y el resultado de date1 - date2 es la diferencia horaria entre dos fechas.
- El algoritmo de conversión es:
  - Llamar a obj[Symbol.toPrimitive](hint) si el método existe,
  - En caso contrario, si la sugerencia es "string" intentar llamar a obj.toString() y obj.valueOf(), lo que exista.
  - En caso contrario, si la sugerencia es "number" o "default" intentar llamar a obj.valueOf() y obj.toString(), lo que exista.

