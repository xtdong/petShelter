var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/dist/public'));

// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Routes
require('./server/config/routes.js')(app)

// Setting our Server to Listen on Port: 8800
app.listen(8800, function () {
    console.log("listening on port belt 8800");
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});