const express = require('express');
const http = require('http');
const mysql = require('mysql2');

const app = express();
const server = http.createServer(app);
const PORT = 3000;

const db = require('./db/database')();
const Table = require('./db/Table');
const requests = require('./db/requests');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended: false});

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    database: "enrolleedb",
    password: "P159632Lab",
}).promise();

app.use(express.static('./dist'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
})

app.get('/requestList', (req, res) => {
    res.sendFile(__dirname + '/dist/requests/requests.html')
})

app.get('/request', (req, res) => {
    const getData = `SELECT * FROM requests, category
                     WHERE requests.categoryID = category.id`;

    let data;
    connection.query(getData)
        .then(result => { 
            data = result
            res.send(decodeURI(data))
            console.log(JSON.stringify(data))
        })
        .catch(err => {
            console.error(err);
        })
    
})

app.post('/request/:reqID', urlencodedParser, (req, res) => {
    let user = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        categoryID: req.params.reqID
    }

    let userArr = [user.name, user.phone, user.email, +user.categoryID]
    console.log(userArr.join('","'));

    const query = `INSERT INTO requests(name, phone, email, categoryID) VALUES("${userArr.join('","')}")`;
    connection.query(query)
        .then(result => {
            console.log("Data has uploaded")
        })
        catcg(err => { console.error(err) });

    res.redirect('/');
})

server.listen(process.env.PORT || PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/`)
})