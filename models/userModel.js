const mongooes = require('mongoose');
const Schema = mongooes.Schema;

let User = new Schema({
    'username': String,
    'password': String
});

module.exports = mongooes.model('User', User, 'Users');

// var mongojs = require('mongojs');

// var databaseUrl = 'mongodb://localhost:27017/car';
// var db = mongojs(databaseUrl);


// exports.login = (userData, callback) => {
//     db.Users.find({'username': userData.username,'password': userData.password}, callback);
// }

// exports.getAllOffers = ({}, callback) => {
//     db.Offers.find(callback);
// }

// exports.bookRide = (rideData, callback) => {
//     db.Offers.findAndModify({
//         query: {'_id': rideData._id},
//         update: {$set: {seatsLeft: (parseInt(rideData.seatsLeft) - 1)}},
//         new: true
//     },callback);
// }