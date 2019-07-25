const mysql = require("mysql");

// CONNECTION WITH JAWSDB FOR HEROKU
var connection;
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
}

// CONNECT
connection.connect();

// EXPORT
module.exports = connection;