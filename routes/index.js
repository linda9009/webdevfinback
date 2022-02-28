const express = require('express');
const router = express.Router();

// Subrouters;
const resultsRouter = require('./results');
const pagesRouter = require('./pages');

// Mount our subrouters to assemble our apiRouter;
router.use('/results', resultsRouter);
router.use('/pages', pagesRouter);

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;