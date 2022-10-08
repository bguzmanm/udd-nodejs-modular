const users = [
  {"id": 1, "name":"John","phone": 300239485},
  {"id": 2, "name":"Marie","phone": 245676430},
  {"id": 3, "name":"Ana","phone": 567836330},
  {"id": 4, "name":"David","phone": 49654730},
  {"id": 5, "name":"Jessica","phone":2536780},
  {"id": 6, "name": "James","phone": 389876650},
  {"id": 7, "name": "Henry", "phone": 78965432},
  {"id": 8, "name": "Tony", "phone": 98765432},
  {"id": 9, "name": "Marcus", "age": 30},
]

async function find(name, data) {
  let encontrado = await data.find((element) => { return element.name === name});
  if (!encontrado){
    return 'no existe';
  }
  if (!encontrado.phone){
    return 'no tiene telefono';
  }
  return encontrado;
} 

module.exports = {users, find};