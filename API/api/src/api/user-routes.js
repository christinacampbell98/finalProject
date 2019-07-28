const express = require('express');
const router = express.Router();
const User = require('../models/user-models');
router.get('/', (req,res)=>{
    User.prototype.getAllUsers().then(users=>{
        res.send(users);
    }).catch(err=>{
        res.send(err);
    });
});

router.post('/', (req,res)=>{
    User.prototype.createUsers(req.body).then(users=>{
        res.send(users);
    }).catch(err=>{
        res.send(err);
    });
});
router.post('/user',(req,res)=>{
    User.prototype.findUserById(req.body).then(user=>{
        res.send(user);
    }).catch(err=>{
        res.send(err);
    });
});
router.get('/reg',(req,res)=>{
    User.prototype.getLastUser().then(user=>{
        res.send(user);
    }).catch(err=>{
        res.send(err);
    });
});
router.post('/provider',(req,res)=>{
    User.prototype.findProviderById(req.body).then(user=>{
        res.send(user);
    }).catch(err=>{
        res.send(err);
    });
});



module.exports = router;