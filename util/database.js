const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'Makayiram_01', {
    dialet: 'mysql', host: 'localhost'
});

module.exports = sequelize;


// const mysql = require('mysql2')

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'Makayiram_01'
// });

// module.exports = pool.promise();