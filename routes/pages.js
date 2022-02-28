const express = require('express');
const router = express.Router();
const { Page, Result } = require('../database/models');

const ash = require('express-async-handler');

//GET ALL Pages

router.get('/', ash(async(req, res) => {
  let pages = await Page.findAll({include: [Result]});
  res.status(200).json(pages);
}));

// Get Page by ID
router.get('/:id', ash(async(req, res) => {
  let page = await Page.findByPk(req.params.id, {include: [Result]});
  res.status(200).json(page);
}));

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;