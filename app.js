const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const User = require('./models/userModel');
const Offer = require('./models/offerModel');
const Ride = require('./models/rideModel');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/car', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.post('/login', (req, res) => {
    User.find({'username': req.body.username, 'password': req.body.password}, (err, data) => {
        if ( err || !data.length) {
            res.json({'message': 'failure'});
        } else {
            res.status(200).send({'message': 'success', 'userName': data[0].username});
        }
    });
});

router.get('/show_rides', (req, res) => {
    Offer.find({}, (err, data) => {
        if (err || !data.length) {
            res.json({'status': 'error'});
        } else {
            res.json(data);
        } 
    });
});

router.post('/book_ride', (req, res) => {
    console.log(req.body._id);
    Offer.updateOne(
        {
            '_id': new mongoose.Types.ObjectId(req.body._id)
        },
        {
            $inc : { seatsLeft: -1}
        }
    )
    .exec()
    .then(result => {
        let ride = new Ride({
            'rideId': req.body.id,
            'riderName': req.body.name,
            'rideeName' : req.body.username,
            'pickUp': req.body.pickUp,
            'destination': req.body.destination,
            'status': 'Booked'
        });
        ride.save()
        .then(result => {
            Offer.findOne(
                {'_id': new mongoose.Types.ObjectId(req.body._id)}
            )
            .exec()
            .then(offerResult => {
                console.log(offerResult);
                res.status(200).send({'id': req.body.id, 'rideData': offerResult, message: "Ride booked successfully"})
            });
        })
    })
    .catch(err => {
        res.status(400).send({'message': 'ride not booked'});
    });

    // Offer.update({'_id': new mongoose.Types.ObjectId(req.body._id)}, {$inc : {seatsLeft : -1}}, (err, data) => {
    //     if (err || !data) {
    //         res.json({'status': 'error'});
    //     } else if (data) {
    //         let ride = new Ride({
    //             'rideId': req.body.id,
    //             'riderName': req.body.name,
    //             'rideeName' : req.body.username,
    //             'pickUp': req.body.pickUp,
    //             'destination': req.body.destination,
    //             'status': 'Booked'
    //         });
    //         ride.save()
    //         .then(response => {
    //             res.status(200).send({'id': req.body.id, 'rideData': req.body, message: "Ride booked successfully"})
    //         })
    //         .catch(err => {
    //             res.status(400).send({'message': 'ride not booked'});
    //         }); 
    //     }
    // });
});

router.post('/cancel_ride', (req, res) => {
    Ride.update({'rideId': req.body.rideId},{$set : {status: 'cancelled'}}, (err, data) => {
        if (err) {
            res.json({'status': 'error'});
        } else if (data) {
            Offer.update({'id': req.body.rideId},{$inc : {seatsLeft: 1}}, (err, data) => {
                if (data) {
                    res.status(200).send({'message': 'Ride cancelled successfully'});
                }
            });
        }
    });
});

router.post('/offer_ride', (req,res) => {
    let offer = new Offer({
        'id': req.body.id,
        'name': req.body.name,
        'pickUp': req.body.pickUp,
        'destination': req.body.destination,
        'seatsLeft': req.body.seatsLeft,
        'car': req.body.car
    });
    offer.save()
    .then(response => {
        res.status(200).send({'message':'Offer added successfully'});
    })
    .catch(err => {
        res.status(400).send({'message': 'Offer not added'});
    });
});

app.use('/', router);

app.listen(3000, () => {
    console.log('Listing port 3000');
});

module.exports = app;
