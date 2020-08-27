const mongoose = require('mongoose')
const Schema = mongoose.Schema


const destinationSchema = new Schema({
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    arrival: Date
})


const planeSchema = new Schema({
    airline: {type: String, enum: ['American', 'Southwest','United']},
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN'},
    planeNo: {type: Number, min: 10, max: 9999},
    departs: {type: Date, default: '08/20/2021'},
    destinations: [destinationSchema],
})

module.exports = mongoose.model('Plane', planeSchema)
