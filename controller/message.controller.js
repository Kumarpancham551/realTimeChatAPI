//const { user } = require('../models');
const db = require('../model');
const Message = db.message;

exports.create = (req, res) => {
    const message = {
        userid: req.body.userid,
        body: req.body.body,
        senderId: req.body.senderId
    }
    Message.create(message).then(response => {
        console.log(`tweet: [${response} got inserted in db]`);
        res.status(201).send(response);
    }).catch(err => {
        console.log(`tweet: [${err} not inserted in db]`);
        res.status(500).send({
            message: "Some internal error occured while storing the tweet data"
        })
    })
}
