# Aprendiendo Javascript

## Fundamentos de Javascript
## Hola mundo!
Revisar [Iniciando javascript](https://es.javascript.info/hello-world):
 - [x] Etiqueta `<script>`, sirve para incluir codigo javascript.
 - [x] Scripts externos `<script src="/path/to/script.js"></script>`, sirve para incluir archivos js externo. 
 - [x] Comentarios `<!-- Es un comentario -->`
 - [x] `alert()` emite alertas en el sistema.

### Tareas
 - [x] Mostrar una alerta 
 - [x] Mostrar un script externo
### Archivos adjuntos:
* alert.js
* holamundo.html

## Estrutura del código
Revisar [Estructura](https://es.javascript.info/structure) y [strict mode](https://es.javascript.info/strict-mode):
- [x] Punto y coma -> ; sirve para separar sentencias, se puede omitir si existe un salto de linea.
- [x] Comentario de una sola linea -> `// Esto es un comentario simple`
- [x] Comentario de varias lineas ->   `/* Esto es un comentarios de varias lineas */`
- [x] `'use strict'` -> indica que el código o parte de esté, debe ejecutarse previniendo que se tomen ciertas acciones erróneas o malos hábitos de programación y de esta manera arrojando más excepciones. Va antes del las funciones, al inicio de la etiqueta `<script>`, para activarlo. En caso de realizar clases, se activa automaticamente.

### Archivos adjuntos:
* estructura.html

## Variables
Revisar [variables](https://es.javascript.info/variables):
- [x] `let` -> para definir variables, tambien puede ser `var` pero ya no se usa mucho.
- [x] Se puede definir varias variables en una sola linea y separarlos con coma, pero lo mejor es haceruna linea por cada uno.
- [x] Una variable puede cambiar o ser reasinado de nuevo.
- [x] Error cuando se crea una variable con un nombre ya creado antes.
- [x] El nombre únicamente puede incluir letras, dígitos, o los símbolos $ y _. El primer carácter no puede ser un dígito.
- [x] La capitalizacion es importante, edad y EDAD son variables diferentes.
- [x] Las palabras reservadas no pueden ser usadas como variables.
- [x] Es necesario usar el `use strict` para crear variables.
- [x] `const` -> sirve para declarar variables inmutables.
- [x] Generalmente usamos mayúsculas para constantes que están “hard-codeadas”. En otras palabras, cuando el valor se conoce antes de la ejecución y se escribe directamente en el código;

### Archivos adjuntos:
* variable.html

### Tareas
* tarea_variable.html

## Tipos de datos
Revisar [Tipos](https://es.javascript.info/types):
- [x] Se puede almacenar un valor de cualquier tipo dentro de una variable.
- [x] El tipo `number` representa tanto números enteros como de punto flotante.
- [x] Hay muchas operaciones para números *,+,-,/.
- [x] Existen los llamados “valores numéricos especiales” que también pertenecen a este tipo de datos: Infinity, -Infinity y NaN.
    * `Infinity` -> representa el Infinito matemático \∞. Es un valor especial que es mayor que cualquier número.
    * `NaN` -> representa un error de cálculo. Es el resultado de una operación matemática incorrecta o indefinida.
    * `BigInt`se agregó recientemente al lenguaje para representar enteros de longitud arbitraria.
- [x] El tipo `string`-> representa una cadena de caracteres y debe colocarse entre comillas.
- [x] Hay 3 tipos de comillas: "hola", 'hola' no hay ninguna diferencia, pero ` hola ` , los backticks son comillas de “funcionalidad extendida”. Permiten incrustar variables y expresiones en una cadena de caracteres encerrándolas en `${...}`.
- [x] El tipo `boolean` -> solo tiene dos valores True y False.
- [x] El tipo `null` -> representa “nada”, “vacío” o “valor desconocido”.
- [x] El tipo especial `undefined` -> representa a “valor no asignado”.
- [x] El operador `typeof` devuelve el tipo de dato del operando.

### Archivos adjuntos
* tipo_datos.html

### Tareas
* tipo_datos.html

## Interacción: alert, prompt, confirm 
Revisar [interaccion](https://es.javascript.info/alert-prompt-confirm):

- [x] `alert` muestra un mensaje en pantalla y espera la confirmacion del usuario.
- [x] `prompt` acepta dos argumentos.
    * title -> El texto a mostrar al usuario.
    * default -> Un segundo parámetro opcional, es el valor inicial del campo de entrada.
- [x] `confirm` -> muestra una ventana modal con una pregunta y dos botones: OK y CANCELAR.

### Archivos adjuntos y tarea
* interaccion.html

## Conversion de tipos
Revisar [conversion](https://es.javascript.info/type-conversions)

- [x] Para convertir a string se usa `String(value)`.
- [x] Para convertir a numero ocurre automáticamente en funciones matemáticas y expresiones, se puede usar `Number(value)`.
- [x] Adición ‘+’ concatena strings.
- [x] Para convertir un booleano se usa `Boolean(value)`

## Archivos adjuntos
* conversion.html

## Operadores básicos, matemáticas
Revisar [operadores]():
- [x] Un operador es unario si tiene un solo operando.
- [x] Un operador es binario si tiene dos operandos.
- [x] Operadores matematicas, +, *, /, -, %, **