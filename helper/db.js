const mysql = require('mysql');

const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'jdbc'
    });

conn.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});
  
  module.exports = conn;