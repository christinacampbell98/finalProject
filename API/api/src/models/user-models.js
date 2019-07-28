var mysqlConn = require("../data-base/database");
module.exports = class User{
         
    constructor(){
        
    }
    async getAllUsers(){
        return new Promise((resolve,reject)=>{
            mysqlConn.query("SELECT * FROM Users",function(err,res){
                if(err){
                    
                    reject(err)
                }else{
                    resolve(res);
                }

            })
              
        })
    }
    async getAllProviders(){
        return new Promise((resolve,reject)=>{
            mysqlConn.query("SELECT * FROM providers",function(err,res){
                if(err){
                    
                    reject(err)
                }else{
                    resolve(res);
                }

            })
              
        })
    }

    async createUsers(user){
        return new Promise((resolve,reject)=>{
            mysqlConn.query("INSERT INTO Users set ?", user, (err, res) => {
                if(err){
                    
                    reject(err)
                }else{
                    resolve(res);
                }

            })
              
        })
    }
    async createProvider(user){
        return new Promise((resolve,reject)=>{
            mysqlConn.query("INSERT INTO providers set ?", user, (err, res) => {
                if(err){
                    console.log(err);
                    reject(err)
                }else{
                    console.log(res);
                    resolve(res);
                }

            })
              
        })
    }
    findUserByEmail(email){
        return new Promise((resolve, reject)=>{
            mysqlConn.query("Select * from providers where email=?", email.email, (err,res)=>{
                if(err){
                    console.log(err);
                    reject(err);
                }else{
                    console.log(res);
                    resolve(res);
                }
            })
        })
    };
    getLastUser() {
        return new Promise((resolve, reject)=>{
            mysqlConn.query("SELECT * FROM providers ORDER BY ID DESC LIMIT 1", (err,res)=>{
                if(err){
                    console.log(err);
                    reject(err);
                }else{
                    console.log(res);
                    resolve(res);
                }
            })
        })

    }

    findUserById(userId){
        return new Promise((resolve, reject)=>{
            mysqlConn.query('SELECT * from Users WHERE id=?', userId.id, (err,res)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(res);
                }
            })
        })
    };
    findProviderById(userId){
        return new Promise((resolve, reject)=>{
            mysqlConn.query('SELECT * from providers WHERE id=?', userId.id, (err,res)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(res);
                }
            })
        })
    };

    updateUserById(userId,user){
        return new Promise((resolve,reject)=>{
            mysqlConn.query("UPDATE Users SET user=? WHERE id=?", [user,userId],(err,res)=>{
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            })
        })
    }

    removeUser(userId){
        return new Promise((resolve,reject)=>{
            mysqlConn.query("DELETE FROM user WHERE id=?", userId,(err,res)=>{
                if (err){
                    reject(err);
                }
                else{
                    resolve(res);
                }
            })
        })
    }



};