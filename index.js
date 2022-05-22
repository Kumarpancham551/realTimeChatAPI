const express = require("express");
const bodyParser=require("body-parser");

const app = express();

app.use(bodyParser.json());
const db = require("./model")

db.sequelize.sync({force:true}).then(()=>{
    console.log("table dropped and re-created");
}).catch(err=>{
    console.log(err.message);
})

require("./route/user.route")(app);

app.listen(8080,()=>{
    console.log("App is started ");
})