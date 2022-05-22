const userController = require('../controller/user.controller');
module.exports = function (app){
    app.post("/register",userController.register);
    app.get("/users/all",userController.findAll);
}