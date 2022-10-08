const {suma, resta, multiplica, divide} = require('./module/calculadora');

console.log('hola');

let a = 20;
let b = 0;

console.log(`La suma de ${a} + ${b} es = ${suma(a, b)}`);
console.log(`La resta de ${a} - ${b} es = ${resta(a, b)}`);

multiplica(a, b)
  .then(value => console.log(`La multiplicación de ${a} * ${b} es = ${value}`));
divide(a, b)
  .then(value => console.log(`La división de ${a} / ${b} es = ${value}`))
  .catch(err => {
    console.error(err);
  });

