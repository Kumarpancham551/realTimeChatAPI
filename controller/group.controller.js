const db = require('../model');
const Group=db.group;

exports.create = (req, res) => {
    const group = {
        userid: req.body.userid,
    }
    Group.create(group).then(response => {
        console.log(`group is created`);
        res.status(201).send(response);
    }).catch(err => {
        res.status(500).send({
            message: "Some internal error occured while storing the tweet data"
        })
    })
}