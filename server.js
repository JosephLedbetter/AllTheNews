const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

const express = require('express');
const app = express();

app.use(logger('dev'));
app.use(
        bodyParser.urlencoded({
            extended: false
        })
);

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3000; 
app.listen(PORT, function(){
    console.log('listening on PORT ' + PORT);
});
