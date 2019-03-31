var mongojs = require('mongojs');

var databaseUrl = 'mongodb://localhost:27017/car';
var db = mongojs(databaseUrl);


exports.login = (userData, callback) => {
    db.Users.find({'username': userData.username,'password': userData.password}, callback);
}

exports.getAllOffers = ({}, callback) => {
    db.Offers.find(callback);
}