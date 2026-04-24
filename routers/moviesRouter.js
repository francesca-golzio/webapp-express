const express = require('express'); 
const moviesRouter = express.Router();
const moviesController = require('../controllers/moviesController');


/* INDEX */
moviesRouter.get('/', moviesController.index);

/* SHOW */
moviesRouter.get('/:id', moviesController.show);

/* CREATE  */
moviesRouter.post('/:id', moviesController.create);

module.exports = moviesRouter;