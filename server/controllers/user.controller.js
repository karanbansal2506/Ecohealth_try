import userModel from "../model/user.model.js";
import AppError from "../utils/error.utils.js";
const register =async(req,res,next)=>{
    const {username,email,password}=req.body;
 if(!username ||! email || !password){
    return next( new AppError("all fields are reuired",400))
}
const userExists=await userModel.findOne({
    email
})
if(userExists){
      return next( new AppError("user alreday exists",400))
}
const  user =await userModel.create({
    username,email,password,
    
})
if(!user ){
    return next(new AppError("user registeration failed ,please try again",400))
}
await user.save();
const token =await user.generateJWTToken()
 user.password = undefined;
console.log(token);
res.status(200).json({
    success:true,
    message:"User registered successfully",
    user,
    token
})
}

const login=async(req,res,next)=>{
 try{   const {email,password}=req.body;
if(! email || !password){
    return next( new AppError("all fields are required",400))
}
const user=await userModel.findOne({email}).select("+password");
if(!user || !(await user.comparePassword(password))){
    return next (new AppError("email or password does not match ",400))
}
const token=await user.generateJWTToken()
user.password=undefined;

res.status(200).json({
    success:true,
    message:"User logged in  successfully",
    user,token
})}catch(e){

    return next(new AppError(e.message,500));
}
}
export{register,login}