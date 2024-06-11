const mongoose = require('mongoose');

const dbConnect = () =>{
    const connectionParams = {useNewUrlParser:true};
    mongoose.connect(process.env.DB,connectionParams);

    mongoose.connection.on("connected",()=>{
        console.log("connected to database successfully");
    });
    mongoose.connection.on("error",(err)=>{
        console.log("error ocurred while connecting " + err)
    })
    mongoose.connection.on("disconnected",()=>{
        console.log("mongodb connection disconnected")
    })
}
module.exports = dbConnect;