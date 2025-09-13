import { Router } from "express";
import { login, register } from "../controllers/user.controller.js";
const userRouter=Router()



userRouter.route("/register").post(register)// add weiight and goals 
userRouter.route("/login").post(login)
//logout

//get photo input out nutrition
//post  nutrition to user detail 
// get avg calories 
// get avg protien  
// get avg carbs
// get daily calorie intake   

//carobon - get activity 


export default userRouter