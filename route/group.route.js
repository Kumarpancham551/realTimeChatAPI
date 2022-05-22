const groupController = require('../controller/group.controller');
module.exports = function (app){
    app.post("/group",groupController.create);
}