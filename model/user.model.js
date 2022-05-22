module.exports =(sequelize,Sequelize)=>{
    const User = sequelize.define("user",{
        userid:{
            type : Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type:Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        contact:{
            type:Sequelize.STRING
        }
    });
    return User;
   }