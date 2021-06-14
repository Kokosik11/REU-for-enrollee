const mysql = require('mysql2');

const Table = require('./Table');
const Category = require('./category');
const Requests = require('./requests');

const createDB = () => {
    const connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        database: "enrolleedb",
        password: "P159632Lab",
    });
    
    connection.connect((err) => {
        if (err) return console.error("Ошибка: " + err.message);
        else console.log("Подключение к серверу MySQL успешно установлено");  
    });
    
    let category = new Table(connection, Category);
    let requests = new Table(connection, Requests);

    connection.end();
}

module.exports = createDB;