const {users, find} = require('./arreglo');

find('Ana', users)
.then((value) =>  console.log(value))
.catch((err) => console.error(err));