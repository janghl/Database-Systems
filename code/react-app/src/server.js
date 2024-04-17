const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mysql = require('mysql'); // Import MySQL package
const port = 5000;

const app = express();
const apiRoot = '/api';
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/localhost/ }));
app.options('*', cors());

// MySQL database connection configuration
const connection = mysql.createConnection({
  host: '104.154.27.247',
  user: 'root',
  password: 'harmonics-spotify',
  database: 'ihd'
});

// Establish MySQL database connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define root route
router.get('/', (request, response) => {
  response.send(`${pack.description} - v ${pack.version}`);
});

// Get method with parameter
router.get('/getMethod/:gotThis', (request, response) => {
  const reqName = request.params.gotThis;
  // Execute SQL query to fetch data from MySQL database
  connection.query('SELECT * FROM your_table WHERE name = ?', [reqName], (err, rows) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return response.status(500).json({ error: 'Internal server error' });
    }
    if (rows.length === 0) {
      return response.status(404).json({ error: 'Record not found' });
    }
    return response.json(rows[0]); // Assuming only one record is expected
  });
});

// Post method
router.post('/postMethod', (request, response) => {
  const body = request.body;
  // Execute SQL query to insert data into MySQL database
  connection.query('INSERT INTO your_table SET ?', body, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return response.status(500).json({ error: 'Internal server error' });
    }
    const newItem = { ...body, id: result.insertId };
    return response.status(201).json(newItem);
  });
});

// Put method with parameter
router.put('/putMethod/:param', (request, response) => {
  const param = request.params.param;
  const body = request.body;
  // Execute SQL query to update data in MySQL database
  connection.query('UPDATE your_table SET ? WHERE name = ?', [body, param], (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return response.status(500).json({ error: 'Internal server error' });
    }
    return response.status(200).json(result);
  });
});

// Delete method with parameter
router.delete('/deleteMethod/:toBeDeleted', (request, response) => {
  const param = request.params.toBeDeleted;
  // Execute SQL query to delete data from MySQL database
  connection.query('DELETE FROM your_table WHERE name = ?', [param], (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return response.status(500).json({ error: 'Internal server error' });
    }
    return response.status(204).end();
  });
});

app.use(apiRoot, router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
