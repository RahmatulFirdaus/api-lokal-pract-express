var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql2');

var indexRouter = require('./routes/index');
var bookRouter = require('./routes/book');

var app = express();

const dbPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'books',
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/book', bookRouter);
app.use('/', (req, res) => {
  //untuk mengeksekusi sql query
  dbPool.execute('SELECT * FROM buku', (err, rows) => {
    if(err){ //ketika error nya true
      res.json({
        message: "connection failed"
      })
    } //tidak perlu else, jika errornya false, langsung menjalankan bawahnya

    res.json({
      message: "connection success",
      data: rows
    })
  })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const ip = '127.0.0.1';
const port = '3000';
console.log(`cek:  http://${ip}:${port}`);

module.exports = app;