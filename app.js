const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const connection = require('./data/db');

/* Middleware file statici */
app.use(express.static('public'));

/* SERVER (INDEX) */
app.get('/', (req, res) => {
  res.json({ 'Welcome': 'Welcome to the Express server!' });
});

/* INDEX */
app.get('/movies', (req, res) => {

  const sql = 'SELECT * FROM movies';

  connection.query(sql, (err, results) => {

    if (err) {
      console.error('Error fetching movies:', err);
      return res.status(500).json({ error: 'Internal Server Error', message: 'An unexpected error occurred. Please try again later.' });
    };

    res.json(results);

  });

});

/* Listener */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

