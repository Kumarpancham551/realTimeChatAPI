module.exports =(sequelize,Sequelize)=>{
    const Group = sequelize.define("groupTable",{
        groupId:{
            type : Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       userID:{
           type:Sequelize.INTEGER
       }
    });
    return Group;
}