var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
app.use(cors())

app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));

app.use(bodyParser.json({limit: '50mb'}))

require('./routes/manufacturing')(app);

app.listen(5001, function() {
  console.log("Express running");
});
