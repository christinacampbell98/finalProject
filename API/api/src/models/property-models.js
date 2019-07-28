var mysqlConn = require("../data-base/database");
module.exports = class Properties{
    async getAllProperties(){
        return new Promise((resolve,reject)=>{
            mysqlConn.query("SELECT * FROM listings",function(err,res){
                if(err){
                
                    reject(err)
                }else{
                    resolve(res);
                }

            })
          
        })
    }
    removeProperty(propertyId) {
        return new Promise ((resolve,reject)=>{
        mysqlConn.query("DELETE FROM listing WHERE id = ?", propertyId, (err, res) => {
          if (err) {
            console.log("error: ", err);
            reject(err);
          } else {
            resolve(res);
          }
        });
    })
      }

    findPropertyById(propertyId){
        return new Promise((resolve, reject)=>{
            mysqlConn.query("Select * from listings where id=?",propertyId, (err,res)=>{
                if(err){
                    reject(err);
                }else{
                    console.log(res);
                    resolve(res);
                }
            })
        })
    };

    findPropertyByProviderId(providerId){
        console.log(providerId,'provider');
        return new Promise((resolve, reject)=>{
            mysqlConn.query("Select * from listings where providerID=?",providerId, (err,res)=>{
                if(err){
                    console.log(err);
                    reject(err);
                }else{
                    console.log(res,"res");
                    resolve(res);
                }
            })
        })
    };
    async createProperty(property){
        return new Promise((resolve,reject)=>{
            mysqlConn.query("INSERT INTO listings set ?", property, (err, res) => {
                if(err){
                    
                    reject(err)
                }else{
                    resolve(res);
                }

            })
              
        })
    }
    updateProperty(edits){
        console.log(edits);
        return new Promise ((resolve,reject)=>{
            mysqlConn.query(
                "UPDATE listings SET title=?, description=? ,location=? ,pricePerNight=? ,imgURL=?  WHERE id = ?",
                [edits.title, edits.description,edits.location,edits.pricePerNight,edits.imgURL, edits.id],
                (err, res) => {
                    if(err){
                        console.log(err);
                        
                        reject(err)
                    }else{
                        resolve(res);
                    }
    
                })
                  
            })
        }
}