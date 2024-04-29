require('dotenv').config()

var mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors middleware
var connection = mysql.createConnection({
  host: '34.170.173.137', 
  user: 'root',
  password: 'root',
  database: 'ihd'
});

connection.connect;
const bodyParser = require('body-parser');

app.use(cors()); // Enable CORS for all routes

app.get('/', (req,res) => res.send('Try: /status, /artistdata') );

app.get('/status', (req, res) => res.send('Success.') );


// GET all artist data for initial display
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

// GET all post data for initial display
app.get('/posts', (req, res) => {
  connection.query("SELECT songname, username, artistname, rating, timeofpost FROM `ihd`.`Posts` NATURAL JOIN `ihd`.`HasSongs` NATURAL JOIN `ihd`.`Songs` NATURAL JOIN `ihd`.`UserAccounts` NATURAL JOIN `ihd`.`Artists` LIMIT 30", (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

// Login endpoint
app.get('/login', (req, res) => {
  const { tmp_username, tmp_pswrd } = req.query;

  // Check if the required parameters are provided
  if (!tmp_username || !tmp_pswrd) {
    res.status(400).send('Username or password is missing');
    return;
  }

  // Use parameterized query or prepared statement to prevent SQL injection
  connection.query('CALL CheckLogins(?, ?, @success)', [tmp_username, tmp_pswrd], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Retrieve the value of the output parameter
    connection.query('SELECT @success', (err, results2) => {
      if (err) {
        console.error('Error retrieving output parameter:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      var success = results2[0]['@success'];

      // Check the value of account_found and send appropriate response
      if (success === 1) {
        res.send(JSON.stringify('Login success'));
      } else {
        res.send(JSON.stringify('Login failed'));
      }
    });
  });
});

// Signup endpoint
app.get('/signup', (req, res) => {
  const { tmp_username, tmp_pswrd } = req.query;

  // Check if the required parameters are provided
  if (!tmp_username || !tmp_pswrd) {
    res.status(400).send('Username or password is missing');
    return;
  }

  // Use parameterized query or prepared statement to prevent SQL injection
  connection.query('CALL CheckSignups(?, ?, @success)', [tmp_username, tmp_pswrd], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Retrieve the value of the output parameter
    connection.query('SELECT @success', (err, results2) => {
      if (err) {
        console.error('Error retrieving output parameter:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      var success = results2[0]['@success'];

      // Check the value of account_found and send appropriate response
      if (success === 1) {
        res.send(JSON.stringify('Signup success'));
      } else {
        res.send(JSON.stringify('Signup failed'));
      }
    });
  });
});


// Use port 8080 by default, unless configured differently in Google Cloud
const port = process.env.PORT || 8080;
app.listen(port, () => {
   console.log(`App is running at: http://localhost:${port}`);
});