const userModel=require("../model/UserModel.js")

const getUserData=async(req,res)=>{
    try{
        const userId=req.user.id;
        const user=await userModel.findById(userId)
        if(!user){
            return res.json({success:false,message:"user Not found"})
        }
        res.json({
            success:true,
            userData:{
                name:user.name,
                isAccountverified:user.isAccountverified
            }
        });
    }catch(error){
        return res.json({success:false,message:error.message})
    }
}
module.exports={getUserData}