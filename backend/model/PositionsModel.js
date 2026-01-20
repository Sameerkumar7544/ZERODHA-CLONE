const mongoose=require("mongoose");
const {PositionsSchema}=require("../schema/PositionsSchema");

const Positionsmodel=mongoose.model("position",PositionsSchema)
module.exports=Positionsmodel;