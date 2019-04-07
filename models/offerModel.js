const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Offer = new Schema({
    '_id': mongoose.Schema.Types.ObjectId,
    'id': Number,
    'name': String,
    'car': String,
    'seatsLeft': Number,
    'pickUp': String,
    'destination': String
});

module.exports = mongoose.model('Offer', Offer, 'Offers');