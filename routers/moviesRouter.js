const express = require('express'); 
const moviesRouter = express.Router();
const moviesController = require('../controllers/moviesController');


/* INDEX */
moviesRouter.get('/', moviesController.index);

/* SHOW */
moviesRouter.get('/:id', moviesController.show);

// Register route handlers
/* index(); // 🤔⚠️ DA CONTROLLARE, AI suggested
show(); */

module.exports = moviesRouter;