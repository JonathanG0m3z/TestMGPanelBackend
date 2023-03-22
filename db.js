const mongoose = require('mongoose');

const con = `mongodb+srv://jonathan:pk2RApzRK1QG7OHT@testmgpanelbackend.b38ot54.mongodb.net/?retryWrites=true&w=majority`;

const dbCon = ()=>{
   mongoose.connect(con, { useNewUrlParser: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.log('Error al conectarse a MongoDB:', err)); 
}

module.exports = dbCon;
