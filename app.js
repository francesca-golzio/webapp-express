const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const moviesRouter = require('./routers/moviesRouter');
const cors = require('cors');

/* Middleware file statici */
app.use(express.static('public'));
/* Middleware for body parser */
app.use(express.json());
/* Middleware CORS */
app.use(cors());

/* SERVER (INDEX) */
app.get('/', (req, res) => {
  res.json({ 'Welcome': 'Welcome to the Express server!' });
});

/* Movies Router */
app.use('/movies', moviesRouter);



/* Listener */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/* Movies CRUD */
app.use('/movies', moviesRouter);