const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

const express = require('express');
var app = express();

app.use(logger('dev'));
app.use(
        bodyParser.urlencoded({
            extended: false
        })
);

app.use(express.static(process.cwd() + "/public"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars");

mongoose.connect("mongodb://localhost/scraped_news");
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection errorL "));
db.once("open", function(){
    console.log("connected to mongoose");
});

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var PORT = process.env.PORT || 3000; 
app.listen(PORT, function(){
    console.log('listening on PORT ' + PORT);
});
