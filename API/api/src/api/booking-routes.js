const express = require('express');
const router = express.Router();
const Booking = require('../models/booking-models');
const Bookings = require('../services/booking-services');
const Properties = require('../models/property-models');


router.post('/', (req,res)=>{
    Booking.prototype.createBooking(req.body).then(users=>{
        res.send(users);
    }).catch(err=>{
        res.send(err);
    });
});
router.get('/', (req,res)=>{
    Booking.prototype.getAllBookings().then(users=>{
        res.send(users);
    }).catch(err=>{
        res.send(err);
    });
});



router.post("/createNewBooking", (req, res) => {
    Bookings.prototype.createNewBooking(req.body)
    .then(booking =>{
        res.send(booking);
    })
    .catch(err =>{
        res.status(400).send(err);
    });
});

router.post("/list", (req, res) => {
    console.log(req.body.propertyId);
    Booking.prototype.getBookingsById(req.body.propertyId)
    .then(bookings =>{
        res.send(bookings);
    })
    .catch(err =>{
        res.status(400).json(err);
    });
});

router.post("/properties",(req,res)=>{
    console.log(req.body)
    Properties.prototype.findPropertyByProviderId(req.body.id).then(properties=>{
        res.json(properties);
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json(err);
    })
})

router.patch("/updateBookingStatus", (req, res) =>{

    Booking.prototype.updateStatus(req.body)
    .then(bookings =>{
        console.log(bookings)
        res.send(bookings);
    })
    .catch(err =>{
        console.log(err)
        res.status(400).send(err);
    });
});


module.exports= router;