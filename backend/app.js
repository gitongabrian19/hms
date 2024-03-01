var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const connectDb = require('./public/javascripts/databaseConn');/// imported database connection
var submitBookNow = require("./routes/bookNowSubmitRoute"); // imported the booknow route
var cors = require('cors'); // imported cors

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();
connectDb();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(bodyParser.json()); //added body parser
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// using cors options to connect to the server
const corsOptions ={
  origin : "http://127.0.0.1:5500",
  methods : "POST",
  optionSuccessStatus : 204,
};

app.use('/', indexRouter);
app.use('/users', usersRouter);

//my routes
app.options("/submitBookNow", cors(corsOptions));
app.post("/submitBookNow",cors(corsOptions), submitBookNow);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.title = err.title;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  if (req.accepts('html')) {
    res.render('error');
    return;
  }
  res.json({ error: err.message || 'Internal Server Error' });
});


module.exports = app;
