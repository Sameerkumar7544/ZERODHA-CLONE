const mongoose = require("mongoose");
const {OrdersSchema}=require("../schema/OrdersSchema")

const Ordersmodel=  mongoose.model("order",OrdersSchema);
module.exports=Ordersmodel;