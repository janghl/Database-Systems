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
app.get('/artists', (req, res) => {
  connection.query("SELECT artistname, genre FROM `ihd`.`Artists`", (err, results) => {
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

// Login endpoint (assuming using POST request)
app.post('/login', (req, res) => {
  const { tmp_username, tmp_pswrd } = req.body;

  // Check if the required parameters are provided
  if (!tmp_username || !tmp_pswrd) {
    res.status(400).send('Username or password is missing');
    return;
  }

  // Use parameterized query or prepared statement to prevent SQL injection
  connection.query('CALL CheckLogins(?, ?)', [tmp_username, tmp_pswrd], (err, results) => {
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