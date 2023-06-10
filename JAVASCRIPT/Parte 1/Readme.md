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

