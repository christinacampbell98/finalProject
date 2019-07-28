const Booking= require('../models/booking-models');
var fs = require("fs");
var jwt = require('jsonwebtoken');

module.exports=class Bookings{
    createNewBooking(booking){
        return new Promise((resolve, reject)=>{
            const bookingObj={
                dateFrom: booking.dateFrom,
                dateTo: booking.dateTo,
                userId: booking.userId,
                propertyId: booking.propertyId,
                status: booking.status
            }
            const newBooking= new Booking();
            newBooking.dateFrom= bookingObj.dateFrom;
            newBooking.dateTo= bookingObj.dateTo;
            newBooking.userId = bookingObj.userId;
            newBooking.propertyId = bookingObj.propertyId;
            newBooking.status = bookingObj.status;

            Booking.prototype.createNewBooking(newBooking,(err,res)=>{
                if(err) reject(err);
                resolve(res);
            })
        }).catch((err)=>{
            reject(err)
        });
    }

  async hashPassword(password){
    var salt = bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  listAllBookings(propertyId){
    return new Promise((resolve, reject) => {
        
    Booking.getBookingByPropertyId(propertyId.propertyId, (err, res) => {
        if(err) reject(err);

        
        let dbBooking = res.filter(dbBooking =>{
            return dbBooking.propertyId == propertyId.propertyId;
        });
        if(dbBooking.length >= 1){
            resolve(dbBooking)
        }
        else{
            reject("No booking requests")
        }
    });
});
  }
  
  updateBookingStatus(id, body){
      console.log(id);
    return new Promise((resolve, reject) =>{
        
            
                Booking.updateStatus(id, body.status, (err, res)=>{
                    if(err){
                        reject(err);
                    } else{
                        resolve(res);
                    }
                });
            }
    );
    
  }

    
  async getJwtToken(user, rememberUser){
      let jwtObject = {};

      jwtObject.id = user.id;
      jwtObject.firstName = user.firstName;
      jwtObject.lastName = user.lastName;
  }
};

 

