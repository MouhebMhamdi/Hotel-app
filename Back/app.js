var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hotelRouter = require('./routes/Hotel');
var ReservationRouter = require('./routes/Reservation');
const Grid = require("gridfs-stream");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(cors({origin: '*'}));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hotel', hotelRouter);
app.use('/reservation', ReservationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

require('dotenv/config');
let gfs;
//------------la modéfication --------------------

var mongoose=require('mongoose');

var config=require('./Database/db.json')
mongoose.connect(config.mongo.uri,{useNewUrlParser: true,useUnifiedTopology: true},()=>console.log("CONNETED DB"));

const conn = mongoose.connection;
conn.once("open", function () {
   let gfs= Grid(conn.db, mongoose.mongo);
    gfs.collection('photos');
});



//-------------------------------------------
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
