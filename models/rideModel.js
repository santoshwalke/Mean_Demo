const mongooes = require('mongoose');
const Schema = mongooes.Schema;

let Ride = new Schema({
    'rideId': Number,
    'riderName': String,
    'rideeName': String,
    'pickUp': String,
    'destination': String,
    'status': String
});

module.exports = mongooes.model('Ride', Ride, 'Rides');