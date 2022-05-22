module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define("message", {
        userid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
          
        },
        body:{
            type: Sequelize.STRING,
            allowNull: false
        },
        senderId: {
            type: Sequelize.INTEGER
        },
       
    },
    {
        tableName: 'message'
    });
    return Message;
}