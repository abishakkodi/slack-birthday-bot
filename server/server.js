const express = require('express');
const app = express();

const mysql = require('mysql');


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

connection.connect((err, res) => {
  if (err) {
    console.log(err);
  } else {

    console.log(res, 'connected!')
  }


});


app.get('/', (req, res) => {
  connection.query('SELECT * FROM test', (err, rows, field) => {
    if (!!err) {
      console.log(err);
    }
  });
});


app.listen(4000);