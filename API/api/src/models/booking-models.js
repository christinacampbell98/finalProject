var mysqlConn = require("../data-base/database");
module.exports = class Booking{

    async createBooking(newBooking) {
        return new Promise((resolve,reject)=>{
            mysqlConn.query("INSERT INTO bookings set ?", newBooking, (err, res) => {
                if(err){
                    console.log({"err": err});
                    
                    reject(err)
                }else{
                    console.log(res);
                    resolve(res);
                }

            })
              
        })    }
        async getAllBookings(){
            return new Promise((resolve,reject)=>{
                mysqlConn.query("SELECT * FROM bookings",(err,res)=>{
                    if(err){
                    
                        reject(err)
                    }else{
                        resolve(res);
                    }
    
                })
              
            })
        }
      
    
      async getBookingsById(id){
        return new Promise((resolve,reject)=>{
            mysqlConn.query("SELECT * FROM bookings WHERE propertyId=?",id,function(err,res){
                if(err){
                    console.log('error',err);
                
                    reject(err)
                }else{
                    console.log('res',res);
                    resolve(res);
                }

            })
          
        })
    }

    updateStatus(req){
        return new Promise((resolve,reject)=>{
        mysqlConn.query(
        "UPDATE bookings SET status = ? WHERE id = ?",[req.status, req.id],(err, res) => {
            if (err) {
                resolve( err);
            } else {
                reject(null, res);
            }
        });
    });
}
}


// module.exports = Booking;
