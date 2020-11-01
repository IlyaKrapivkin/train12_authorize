const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Student = require('../models/student');
// const Book = require('../models/book');

mongoose.connect('mongodb://localhost:27017/studBook', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// router.get('/users', async (req, res) => {
//   const allUsers = await Student.find();
//   res.json(allUsers);
// });

router.post('/user', async (req, res) => {
  const { userName } = req.body;
  const findedUser = await Student.findOne({ name: userName });
  res.send(findedUser);
});

router.put('/users', async (req, res) => {
  const { name } = req.body;
  const date = req.body?.date;
  const student = new Student({ name, date });
  try {
    await student.save();
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
  res.status(200).end();
});

module.exports = router;
