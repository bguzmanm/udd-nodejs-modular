const suma = (a, b) => {
  return a + b;
}

const resta = (a, b) => {
  return a - b;
}

async function multiplica(a, b){
  return a * b;
}

async function divide(a, b) {
  return a / b;
}

module.exports = {suma, resta, multiplica, divide};