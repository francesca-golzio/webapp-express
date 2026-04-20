const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

/* Middleware file statici */
app.use(express.static('public'));

/* SERVER (INDEX) */
app.get('/', (req, res) => {
  res.json({ 'Welcome': 'Welcome to the Express server!' });
});

/* Listener */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

