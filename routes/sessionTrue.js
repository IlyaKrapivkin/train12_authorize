// REQUIRE:
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
// CONSTS:
const router = express.Router();

const Student = require('../models/student');
// const Book = require('../models/book');
mongoose.connect('mongodb://localhost:27017/studBook', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.use(session({
  secret: 'strashnaya taina',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly: true },
}));
// CODE:
router.get('/', (req, res) => {
  res.render('loginTrue');
});

router.post('/loginTrue', async (req, res) => {
  const { userName, userPhone } = req.body;
  const user = await Student.findOne({ name: userName });
  if (user) {
    if (user.phone === userPhone) {
      res.redirect(`profileTrue/${user.id}`);
    } else {
      res.render('loginTrue', { message: 'you have another phone!' });
    }
  } else {
    res.render('loginTrue', { message: 'no such user!' });
  }
});

router.get('/profileTrue/:id', async (req, res) => {
  const user = await Student.findById(req.params.id);
  res.render('profileTrue', { user });
});

module.exports = router;