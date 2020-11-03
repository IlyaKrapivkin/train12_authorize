// REQUIRE:
const express = require('express');
const cookieParser = require('cookie-parser');
// const session = require('express-session');

const app = express();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const sessionRouter = require('./routes/session');
const sessionTrueRouter = require('./routes/sessionTrue');
// MIDDLES:
app.set('view engine', 'hbs');
// app.set('trust proxy', 1); // for session

// app.use(session({
//   secret: 'strashnaya taina',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false, httpOnly: true },
// }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// ROUTES:
app.use('/', indexRouter);
app.use('/userapi', usersRouter);
app.use('/session', sessionRouter);
app.use('/sessionTrue', sessionTrueRouter);
// CODE:

// AFTERCODE:
app.listen(3000);
