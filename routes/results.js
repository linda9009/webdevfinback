const express = require('express');
const router = express.Router();
const { Page, Result } = require('../database/models');

const ash = require('express-async-handler');

// Get all results
router.get('/', ash(async(req, res) => {
  let results = await Result.findAll({include: [Page]});
  res.status(200).json(results);
}));

/** GET result BY ID */
router.get('/:id', ash(async(req, res) => {
  let result = await Result.findByPk(req.params.id, {include: [Page]});
  res.status(200).json(result);
}));

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;