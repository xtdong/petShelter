var Pet = require('../models/models').Pet
// var Rating = require('../models/cake').rating


module.exports = {

    addNewPet: function (req, res) {
        console.log('controller')
        var newPet = new Pet()
        Pet.findOne({ name: req.body.name }, function (err, getPet) {
            if (getPet) {
                console.log('find the name');
                err = "The name been taken",
                    res.json({ message: "Error", error: err, data: getPet });
            } else {
                newPet.name = req.body.name
                newPet.type = req.body.type
                newPet.url = req.body.url
                newPet.description = req.body.description
                newPet.skills.push(req.body.skills[0], req.body.skills[1], req.body.skills[2])

                newPet.save(function (err) {
                    if (err) {
                        console.log("Something went wrong: " + err);
                        res.json({ message: "Error", error: err })
                    }
                    else {
                        console.log("add a Pet");
                        res.json({ message: "Success", error: "Add one", data: newPet })
                    }
                })
            }
        })
    },


    // find all
    getAllPets: function (req, res) {
        console.log('getAllPets');
        Pet.find({}, function (err, Pets) {
            if (err) {
                console.log('cant find any' + err)
            } else {
                res.json({ message: "List down Pets", data: Pets })
            }
        })
    },

    // find One Pet
    findById: function (req, res, id) {
        Pet.findOne({ _id: Object(id) }, function (err, getPet) {
            if (err) {
                console.log('cant find the author to delete' + err)
            } else {
                res.json({ message: "Success", data: getPet });
            }
        })
    },


    // updated
    updatePet: function (req, res, id) {
        Pet.findOne({ _id: Object(id) }, function (err, editPet) {
            // editPet._id = Object(id);
            editPet.set({
                name: req.body.name,
                type: req.body.type,
                url: req.body.url,
                description: req.body.description,
                skills: req.body.skills
            });
            editPet.save(function (err) {
                if (err) {
                    console.log("Something went wrong: " + err);
                    res.json({ message: "Error", error: err })
                }
                else {
                    console.log("add a Pet");
                    res.json({ message: "Success", error: "Add one", data: editPet })
                }
            })
        })

    },

    // delete
    delete: function (req, res, id) {
        // console.log('Delete in controller')
        Pet.deleteOne({ _id: Object(id) }, function (err) {
            if (err) {
                res.json({ message: "Error", error: err })
            } else {
                res.json({ message: "Success", error: "Success delete" })
            }
        })
    },

    // add like
    addLike: function (req, res, id) {
        console.log('addLike in controller')
        Pet.findOne({ _id: Object(id) }, function (err, thisPet) {
            if (err) {
                res.json({ message: "Error", error: err })
            } else {
                console.log(thisPet.likes);
                thisPet.set({ likes: thisPet.likes + 1 });
                thisPet.save(function (err) {
                    if (err) {
                        console.log("Something went wrong: " + err);
                        res.json({ message: "Error", error: err })
                    }
                    else {
                        console.log("add a like");
                        Pet.find({}, function (err, Pets) {
                            if (err) {
                                console.log('cant find any' + err)
                            } else {
                                res.json({ message: "Success", error: "Add one", data: Pets })
                            }
                        })
                    }
                })
            }
        })
    },


    // end
}