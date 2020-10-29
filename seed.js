const mongoose = require('mongoose');
const Student = require('./models/student');
const Book = require('./models/book');

mongoose.connect('mongodb://localhost:27017/studBook', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seed(arr, collection) {
  await mongoose.connection.dropDatabase();

  await collection.insertMany(arr);

  await mongoose.disconnect();
}
// STUDENTS:
const niko = new Student({
  name: 'Niko',
  phone: '+123',
  books: [],
});

const marko = new Student({
  name: 'Marko',
  phone: '+456',
  books: [],
});

const petro = new Student({
  name: 'Petro',
  phone: '+789',
  books: [],
});
// BOOKS:
const book1 = new Book({
  title: 'Eugeniy Pechenkin',
  author: 'Pufkin',
});

const book2 = new Book({
  title: 'Maskva Pitushki',
  author: 'Erofey',
});

const book3 = new Book({
  title: 'Moya zhyzn',
  author: 'Bender',
});

seed([niko, marko, petro], Student);
seed([book1, book2, book3], Book);
