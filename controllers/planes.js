const Plane = require('../models/plane')

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

function create(req, res) { //*THIS MIGHT BE THE ERROR     }    
for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
}   
    Plane.create(req.body)
    .then(plane => {
        console.log(plane)
        res.redirect('planes/new')
    })
    .catch(err => {
        console.log(err)
        res.redirect('planes/new')
    })
}

function show (req, res) {
    Plane.findById(req.params.id, function(err, plane){
        res.render(`planes/show`, {title: 'Plane Details', plane})
    })
}