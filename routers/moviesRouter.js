const express = require('express'); 
const moviesRouter = express.Router();
const connection = require('../data/db');


/* INDEX */
const index = () => {
  moviesRouter.get('/', (req, res) => {

  const sql = 'SELECT * FROM movies';

  connection.query(sql, (err, results) => {

    if (err) {
      console.error('Error fetching movies:', err);
      return res.status(500).json({ error: 'Internal Server Error', message: 'An unexpected error occurred. Please try again later.' });
    };

    res.json(results);

  });

})
};

/* SHOW */
const show = () => {
  
  moviesRouter.get('/:id', (req, res) => {

  const movieId = req.params.id;
  const sql = 'SELECT * FROM movies WHERE id = ?';

  connection.query(sql, [movieId], (err, results) => {

    if (err) {
      console.error('Error fetching movie:', err)
      return res.status(500).json({ error: 'Internal Server Error', message: 'An unexpected error occurred. Please try again later.' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Movie not found', message: 'The requested movie was not found.' });
    }

    res.json(results[0])

  });

})
}


// Register route handlers
index(); // 🤔⚠️ DA CONTROLLARE, AI suggested
show();

module.exports = moviesRouter;