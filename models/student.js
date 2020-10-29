const { Schema, model } = require('mongoose');

const StudentSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  books: Array,
});

module.exports = model('Student', StudentSchema);
