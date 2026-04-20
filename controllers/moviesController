const connection = require('../data/db.js');


/* INDEX */
const index = (req, res) => {

  const sql = 'SELECT * FROM movies';

  connection.query(sql, (err, results) => {

    if (err) {
      console.error('Error fetching movies:', err);
      return res.status(500).json({ error: 'Internal Server Error', message: 'An unexpected error occurred. Please try again later.' });
    };

    res.json(results);

  });

};

/* SHOW */
const show = (req, res) => {

  const movieId = req.params.id;
  const sql = 'SELECT * FROM movies WHERE movies.id = ?';

  connection.query(sql, [movieId], (err, movieResults) => {

    if (err) {
      console.error('Error fetching movie:', err)
      return res.status(500).json({ error: 'Internal Server Error', message: 'An unexpected error occurred. Please try again later.' });
    };

    if (movieResults.length === 0) {
      return res.status(404).json({ error: 'Movie not found', message: 'The requested movie was not found.' });
    };

    const movie = movieResults[0];

    connection.query('SELECT * FROM reviews WHERE movie_id = ?', [movieId], (err, reviewResults) => {

      if (err) {
        console.error('Error fetching reviews:', err);
        return res.status(500).json({ error: 'Internal Server Error', message: 'An unexpected error occurred. Please try again later.' });
      };

      movie.reviews = reviewResults;
      res.json(movie);

    });

  });

};

  module.exports = {
    index,
    show
  };