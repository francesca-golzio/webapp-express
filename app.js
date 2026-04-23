const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000; //🤔 import.meta.env

/* CORS */
const cors = require('cors');
app.use(cors());

/* Movies Router */
const moviesRouter = require('./routers/moviesRouter');
app.use('/movies', moviesRouter);

/* Middleware file statici */
app.use(express.static('public'));
/* Middleware for body parser */
app.use(express.json());

/* SERVER (INDEX) */
app.get('/', (req, res) => {
  res.json({ 'Welcome': 'Welcome to the Express server!' });
});



/* Listener */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});