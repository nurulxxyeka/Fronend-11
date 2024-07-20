const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'espe'
});
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to DB");
});

module.exports = connection;