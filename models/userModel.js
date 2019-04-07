const mongooes = require('mongoose');
const Schema = mongooes.Schema;

let User = new Schema({
    'username': String,
    'password': String
});

module.exports = mongooes.model('User', User, 'Users');