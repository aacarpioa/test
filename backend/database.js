var Sequelize = require('sequelize');
var t001_transaction = require('./t001_transaction');

const sequelize = new Sequelize('test_2', 'sa', 'Abcd1234.', {
      host: 'localhost',
      dialect: 'mssql',
    dialectOptions: {
      options: {
      },
    }
  })

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  });

  const t001_transactions = t001_transaction(sequelize, Sequelize);


sequelize.sync({ force: false })
    .then(()=>{
        console.log('tablas sincronizadas');
    });


module.exports= { t001_transactions };
