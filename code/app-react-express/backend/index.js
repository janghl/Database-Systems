require('dotenv').config()

var mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors middleware
var connection = mysql.createConnection({
  host: '34.170.173.137', 
  user: 'root',
  password: 'spotify-harmonics',
  database: 'ihd'
});

connection.connect;
const bodyParser = require('body-parser');

app.use(cors()); // Enable CORS for all routes

app.get('/', (req,res) => res.send('Try: /status, /artistdata') );

app.get('/status', (req, res) => res.send('Success.') );


// GET all artist data
app.get('/artistdata', (req, res) => {
  connection.query("SELECT * FROM `ihd`.`Artists`", (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

// New endpoint to trigger the artists query
app.get('/generate-artists', (req, res) => {
  connection.query("SELECT artistname FROM `ihd`.`Artists` LIMIT 15", (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

// Use port 8080 by default, unless configured differently in Google Cloud
const port = process.env.PORT || 8080;
app.listen(port, () => {
   console.log(`App is running at: http://localhost:${port}`);
});