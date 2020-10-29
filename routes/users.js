const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

mongoose.connect('mongodb://localhost:27017/restdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

const User = mongoose.model('User', UserSchema);

router.get('/users', async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers);
});

router.post('/user', async (req, res) => {
  const { name } = req.body;
  const allUsers = await User.findOne({ name });
  res.json(allUsers);
});

router.put('/users', async (req, res) => {
  const { name } = req.body;
  const date = req.body?.date;
  const student = new User({ name, date });
  try {
    await student.save();
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
  res.status(200).end();
});

// router.get('/users', (req, res, next) => {
//   res.json({ name: 'Yastreb' });
// });

module.exports = router;
