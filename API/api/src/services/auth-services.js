const User = require('../models/user-models');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
module.exports = class AuthService {
    constructor(){}
    async loginU(authUser){
        return new Promise((resolve,reject)=>{
            User.prototype
            .getAllUsers()
             .then(users=>{
                 var dbUser = users.filter(user=>{ 
                     return user.email === authUser.email;
                 });
  
                 if (dbUser.length) {


                     if (dbUser[0].password!=authUser.password) {
                        reject("Incorrect password")

                     }
                     else{
                        resolve(dbUser[0]);
                    }
                 }else{
                     reject("user not found");
                 }
                }).catch(err=>{
                    reject("User not found");
                });
            });
    };
    async loginP(authUser){
        return new Promise((resolve,reject)=>{
            User.prototype
            .getAllProviders()
             .then(users=>{
                 var dbUser = users.filter(user=>{ 
                     return user.email === authUser.email;
                 });
  
                 if (dbUser.length) {


                     if (dbUser[0].password!=authUser.password) {
                        reject("Incorrect password")

                     }
                     else{
                        resolve(dbUser[0]);
                    }
                 }else{
                     reject("user not found");
                 }
                }).catch(err=>{
                    reject("User not found");
                });
            });
    };



     async registerU(user){
        return new Promise((resolve, reject)=>{
            User.prototype.getAllUsers().then((data) => {
                data.forEach(existingUser=>{
                    if (existingUser.email==user.email) {
                        reject("This email address already been used")
                    }
                })

                const newUser = new User();
                const userObj = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phone: user.phone,
                    email: user.email,
                    password: user.password,
                }
                newUser.firstName= userObj.firstName;
                newUser.lastName= userObj.lastName;
                newUser.email = userObj.email;
                newUser.password = userObj.password;
                newUser.phone = userObj.phone;

                User.prototype.createUsers(newUser).then(res=>{
                    resolve(res);
                }).catch(err=>{
                    reject(err);
                })
         
             })
           
        })    
    }
    async registerP(user){
        return new Promise((resolve, reject)=>{
            User.prototype.getAllProviders().then((data) => {
                data.forEach(existingUser=>{
                    if (existingUser.email==user.email) {
                        reject("This email address already been used")
                    }
                })

                const newUser = new User();
                const userObj = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phone: user.phone,
                    email: user.email,
                    password: user.password,
                }
                newUser.firstName= userObj.firstName;
                newUser.lastName= userObj.lastName;
                newUser.email = userObj.email;
                newUser.password = userObj.password;
                newUser.phone = userObj.phone;

                User.prototype.createProvider(newUser).then(res=>{
                    resolve(res);
                }).catch(err=>{
                    reject(err);
                })
         
             })
           
        })    
    }

}
