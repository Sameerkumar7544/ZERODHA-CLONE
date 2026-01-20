const mongose=require("mongoose");
const connectDb=async()=>{
    mongoose.connection.on("connected",()=>console.log("database connected"));

    await mongoose.connect(`${process.env.MONGO_URL}/ZERODHACLONE`)
}

module.exports={connectDb}