const express = require('express');
const router = express.Router();
const Properties = require('../models/property-models');
router.get('/', (req,res)=>{
    Properties.prototype.getAllProperties().then(users=>{
        res.send(users);
    }).catch(err=>{
        res.send(err);
    });
});
router.post('/', (req,res)=>{
    Properties.prototype.createProperty(req.body).then(users=>{
        res.json(users);
    }).catch(err=>{
        res.json(err);
    });
});
router.delete('/delete', (req,res)=>{
    Properties.prototype.removeProperty(req.body.id).then(users=>{
        res.send(users);
    }).catch(err=>{
        res.send(err);
    });
});
router.post('/view', (req,res)=>{
    Properties.prototype.findPropertyById(req.body.id).then(users=>{
        res.json(users);
    }).catch(err=>{
        res.json(err);
    });
});
router.patch('/update', (req,res)=>{
    Properties.prototype.updateProperty(req.body).then(users=>{
        res.json(users);
    }).catch(err=>{
        res.json(err);
    });
});
router.post('/create', (req,res)=>{
    Properties.prototype.createProperty(req.body).then(users=>{
        console.log(users)
        res.json(users);
    }).catch(err=>{
        console.log(err);
        res.json(err);
    });
});
module.exports = router;