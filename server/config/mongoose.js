//DB connect
var mongoose = require('mongoose');
// Creat schma
var db = "petShelter" // change for each app
mongoose.connect('mongodb://localhost/' + db, { useNewUrlParser: true });
console.log('connect to mongoDB')

module.exports = {
    mongo: mongoose
}