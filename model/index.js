const Sequelize = require("sequelize");
const config = require("../config/db.config");

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,{
        host:config.HOST,
        dialect:config.dialect,
        pool:{
            max:config.pool.max,
            min:config.pool.min,
            acquire:config.pool.acquire,
            idle:config.pool.idle
        }
    }
);

// I need to expose the seqelize and category model

var db ={};

db.Sequelize= Sequelize,
db.sequelize=sequelize,
db.user=require("./user.model")(sequelize,Sequelize);
db.message = require('./message.model')(sequelize, Sequelize);
db.group = require('./group.model')(sequelize,Sequelize);

db.user.hasMany(db.message);

db.group.belongsToMany(db.user, {
    through: "user_groups",
    foreignKey: "groupId",
    otherKey: "userId"
});

db.user.belongsToMany(db.group, {
    through: "user_groups",
    foreignKey: "userId",
    otherKey: "groupId"
});

module.exports = db;