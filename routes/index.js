const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Authorize' });
});

router.get('/testCK', (req, res) => {
  let counter = Number(req.cookies.views);

  if (!counter) {
    counter = 0;
  }

  counter += 1;

  res.cookie('views', counter, { httpOnly: false });
  res.render('testCK', { counter });
});

module.exports = router;
