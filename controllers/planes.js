const Plane = require('../models/Plane')
const Ticket = require('../models/Ticket')
module.exports = {
    create,
    index,
    new: newPlane,
    show
}

function newPlane(req, res) {
    res.render('planes/new', { title: 'Add Plane' })
}

function index(req, res){
    Plane.find({}, function(err, planes){
        res.render('planes/index', {title: 'All Planes', planes})
    })
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const plane = new Plane(req.body)
    plane.save(function(err) {
        if (err) return res.render('planes/new')
        console.log(plane)
        // res.redirect('/movies')
        res.redirect('planes/new')
    })
}

function show (req, res) {
    Plane.findById(req.params.id, function(err, plane){
        Ticket.find({plane: plane._id}, function(err, tickets){
            res.render(`planes/show`, {title: 'Plane Details', plane, tickets})
        })  
    })
    // Plane.findById(req.params.id, function(err, plane) {
    //     Ticket.find({plane: plane._id}, function(err, tickets){
    //         res.render(`planes/show`, {title: 'Plane Details', tickets
    // //     })
    // })
}