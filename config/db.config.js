module.exports ={
    HOST:"localhost",
    USER:"root",
    PASSWORD:"4523",
    DB:"ChatApi",
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 1000  
    }
}