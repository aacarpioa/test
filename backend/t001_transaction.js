module.exports = (sequelize, type) => {

  return sequelize.define('t001_transaction', {
    NU_ID: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    VA_DESCRIPTION: type.STRING,
    FE_CREATE_ON: type.DATE,
    VA_AMOUNT: type.DECIMAL(16, 0),
  }, {
    freezeTableName: true,
    timestamps: false
  });

};