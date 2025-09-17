 import { Router } from "express";
import  { addFootprint,calculateFootprint } from "../controllers/carbon.controller.js";

const carbonRouter=Router()



carbonRouter.route("/calculate").post(calculateFootprint)// add weiight and goals 

carbonRouter.route("/addcO2").post(addFootprint)




export default carbonRouter