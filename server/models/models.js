//DB connect to mongoose.js
var mongoose = require('../config/mongoose').mongo

// model table
var petSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: [3, "Pet name needs to be greater than 3 characters!"] },
    type: { type: String, required: true, minlength: [3, "Pet type needs to be greater than 3 characters!"] },
    description: { type: String, required: true, minlength: [3, "Description needs to be greater than 3 characters!"] },
    url: String,
    skills: ['', '', ''],
    likes: { type: Number, default: 0 }
}, { timestamps: true })

// var modelTwoSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     relation: [modelOneSchema],
// }, { timestamps: true })



mongoose.model('petSchema', petSchema);
// mongoose.model('modelTwo', modelTwoSchema);
console.log('building table');

module.exports = {
    Pet: mongoose.model('petSchema'),// We are retrieving this Schema from our Models, named 'User'
    // Test: mongoose.model('modelTwo'),
}