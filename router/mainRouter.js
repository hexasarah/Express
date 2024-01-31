const express = require('express');
const router = express.Router();
const path = require('path');
const apiRouter = require('./api/apiRouter');

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});

router.use('/api', apiRouter);

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;
