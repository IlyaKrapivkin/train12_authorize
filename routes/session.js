const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Student = require('../models/student');
// const Book = require('../models/book');

mongoose.connect('mongodb://localhost:27017/studBook', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// CODE:
router.get('/', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { userName, userPhone } = req.body;
  const user = await Student.findOne({ name: userName });
  if (user) {
    if (user.phone === userPhone) {
      res.render('profile', { user });
    } else {
      res.render('login', { message: 'you have another phone!' });
    }
  } else {
    res.render('login', { message: 'no such user!' });
  }
});

module.exports = router;
