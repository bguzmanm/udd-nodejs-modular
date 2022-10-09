# Clase 10 de Octubre

## Patrón Modular / Module Pattern
En palabras simples, se trata de una función que actúa como contenedor para un contexto de ejecución. Esto quiere decir que en su interior, se declaran una serie de variables (que la llamaremos propiedades o atributos) y funciones que solo son visibles desde dentro del mismo (a las que llamaremos métodos). Esto, nos permite dividir el problema original en diversos subproblemas que se pueden resolver por separado, para después recomponer los resultados y obtener la solución completa.

### Exportar modulo con `module.exports`
Utilizaremos `module.exports` para exportar la funcionalidad que queremos exponer.

```javascript
function fnUno() { ... }

function fnDos() { ... }
...
module.exports = {fnUno, fnDos};
```
El ejemplo lo encuentras en [calculadora](module/calculadora.js)

### Importar con `require`
Para traer la funcionalidad que requerimos desde otro archivo, utilizamos `require`.

```javascript
const {fnUno, fnDos} = require('./module/funciones');
```
El ejemplo funcional lo encuentras en [index](index.js).