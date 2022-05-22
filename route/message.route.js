const messageController = require('../controller/message.controller');
module.exports = function (app){
    app.post("/send",messageController.create);
    //app.get("/users/all",messageController.findAll);
}