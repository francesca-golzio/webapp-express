const express = require('express'); 
const moviesRouter = express.Router();
const moviesController = require('../controllers/moviesController');


/* INDEX */
moviesRouter.get('/', moviesController.index);

/* SHOW */
moviesRouter.get('/:id', moviesController.show);

/* STORE REVIEW (CREATE)  */
moviesRouter.post('/:id/review', moviesController.storeReview);

module.exports = moviesRouter;