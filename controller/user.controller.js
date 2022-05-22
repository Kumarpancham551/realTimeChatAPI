//const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
const db = require("../model");
const User = db.user;

exports.register = (req, res) => {
    const userObj = {
        //email username name
        email: req.body.email,
        username: req.body.username,
        contact:req.body.contact
    };
    User.create(userObj).then(user => {
        res.status(201).send(user);
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
}


exports.findAll=(req,res)=>{
    User.findAll().then(products=>{
        res.status(200).send(products);
    }).catch(err=>{
        res.status(500).send({
            message:"some internal error happened"
        })
    })
}
