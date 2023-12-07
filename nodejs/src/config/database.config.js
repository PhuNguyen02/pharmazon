const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'your_pharma',
    port:'3308'
});

module.exports = connection