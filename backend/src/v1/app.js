let createError = require("http-errors");
let express = require("express");
const bodyParser = require("body-parser");
let logger = require("morgan");
let app = express();
let cors = require("cors");

app.use(cors());
require("../config/database");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes handler
require("./routes")(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ error: "Not found 404" });
});

module.exports = app;
