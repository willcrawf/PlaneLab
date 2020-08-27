const Plane = require('../models/Plane')

module.exports = {
    create
}

function create(req, res){
    Plane.findById(req.params.id, function(err, plane){
        plane.destinations.push(req.body)
        plane.save(function(err) {
            res.redirect(`/planes/${plane._id}`)
        })
    })
}