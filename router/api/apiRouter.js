const apiRouter = require('express').Router();
const jsonData = require('../../db/db.json');
const fs = require('fs');

apiRouter.get('/notes', (req, res) => {
  res.json(jsonData);
});

apiRouter.post('/notes', (req, res) => {
  console.log(req.body);
})

module.exports = apiRouter;