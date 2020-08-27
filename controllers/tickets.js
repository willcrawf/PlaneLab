const Plane = require('../models/Plane')
const Ticket = require('../models/Ticket')

module.exports = {
    new: newTicket,
    create
}



function newTicket(req, res) {
    Plane.findById(req.params.id, function(err, plane){
        res.render(`tickets/new`, {title: 'Plane Details', plane})
    })

}

function create(req, res){  
    req.body.plane = req.params.id
        Ticket.create(req.body)
        .then(ticket => {
            res.redirect(`/planes/${req.params.id}`)})
        .catch(err => {
            console.log(err)
            res.redirect(`/planes/${req.params.id}`)
        })
}

