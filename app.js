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

/* SHOW */
app.post('/movies/:id', (req, res) => {

  const movieId = req.params.id;
  const sql = 'SELECT * FROM movies WHERE id = ?';

  connection.query(sql, [movieId], (err, results) => {

    if (err) {
      console.error('Error fetching movie:', err);
      return res.status(500).json({ error: 'Internal Server Error', message: 'An unexpected error occurred. Please try again later.' });
    };

    if (results.length === 0) {
      return res.status(404).json({ error: 'Movie not found', message: 'The requested movie was not found.' });
    }

    res.json(results[0]);

  });

});


/* Listener */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

