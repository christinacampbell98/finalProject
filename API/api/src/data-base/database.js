"use strict";
const mysql = require("mysql");

const config = {
    host: "localhost",
    user: "root",
    password: "password",
    database:"fs_bnb",
    port:3306,
    socketPath: '/tmp/mysql.sock'


};

var connection = mysql.createConnection(config);
connection.connect(function(err){
    if(err) 
    console.log("Data Connected: " + config.host + ":" + config.port);
})

module.exports = connection;