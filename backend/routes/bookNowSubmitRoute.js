const express = require('express');
const mysql = require('mysql');
// const connection = require('../public/javascripts/databaseConn').connection;

const submitBookNow = express.Router();
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hotelsystem'
});

submitBookNow.post('/submitBookNow', (req, res) => {
    const { name, phone, checkIn, checkOut, guests } = req.body;
    console.log(req.body);
    alert('Data received!');
    
    const sql = `INSERT INTO booknow (name, phone, checkIn, checkOut, guests) VALUES (?, ?, ?, ?, ?)`;
    connection.query(sql, [name, phone, checkIn, checkOut, guests], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }
        console.log('Data inserted successfully');
        res.sendStatus(200);
    });
});

module.exports = submitBookNow;