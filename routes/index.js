const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('GET from router INDEX');
});

module.exports = router;
