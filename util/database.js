const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Makayiram_01', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
