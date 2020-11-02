// REQUIRE:
const express = require('express');

const cookieParser = require('cookie-parser');
 
const app = express();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// MIDDLES:
app.set('view engine', 'hbs');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// ROUTES:
app.use('/', indexRouter);
app.use('/userapi', usersRouter);
// CODE:

// AFTERCODE:
app.listen(3000);
