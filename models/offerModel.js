const mongooes = require('mongoose');
const Schema = mongooes.Schema;

let Offer = new Schema({
    'id': Number,
    'name': String,
    'car': String,
    'seatsLeft': Number,
    'pickUp': String,
    'drop': String
});

module.exports = mongooes.model('Offer', Offer, 'Offers');