var controller = require('../controllers/pet') //call to controlls
var path = require('path');

module.exports = function (app) {

    app.get('/', function (req, res) {
        controller.index(req, res)
    })

    app.post('/addPet', function (req, res) {
        controller.addNewPet(req, res)
    })

    app.get('/getAllPets', function (req, res) {
        controller.getAllPets(req, res)
    })

    app.get('/edit/:id', function (req, res) {
        controller.findById(req, res, req.params.id)
    })

    app.patch('/edit/:id', function (req, res) {
        controller.updatePet(req, res, req.params.id)
    })

    app.post('/delete/:id', function (req, res) {
        // console.log('delete btn route');
        controller.delete(req, res, req.params.id)
    })


    app.post('/addLike/:id', function (req, res) {
        console.log('like btn route');
        controller.addLike(req, res, req.params.id)
    })
    // end
}