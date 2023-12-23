const mysql = require("mysql2");

const con = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "rishita",
    database:"sys"
});

module.exports = con;