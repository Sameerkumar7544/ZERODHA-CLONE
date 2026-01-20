const mongoose=require("mongoose");
const {userSchema} = require("../schema/UserSchema");

const userModel= mongoose.model("user",userSchema);

module.exports=userModel;