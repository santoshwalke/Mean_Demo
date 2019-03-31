var express = require('express');
var router = express.Router();
var db = require('../models/dbModule');

router.post('/login', (req, resp, next) => {
    db.login({'username': req.body.username, 'password': req.body.password}, (err, data) => {
        if (err || !data) {
            resp.json({'message': 'failure'});
        } else if(!data.length) {
            resp.json({'message': 'failure'});
        } else {
            resp.json({'message': 'success'});
        }
    });
});

router.get('/show_rides', (req, resp, next) => {
    db.getAllOffers({}, (err, data) => {
        if (err || !data) {
            resp.json({'status': 'error'});
        } else if(!data.length) {
            resp.json({'status': 'error'});
        } else {
            resp.json(data);
        } 
    });
});

router.post('/book_ride', (req, resp, next) => {
    resp.send('book_ride');
});

router.post('/cancel_ride', (req, resp, next) => {
    resp.send('cancel_ride');
});

router.post('/offer_ride', (req, resp, next) => {
    resp.send('offer_ride');
});

module.exports = router;