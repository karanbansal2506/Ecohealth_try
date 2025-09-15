import { Router } from "express";

import { nutritionData } from "../controllers/meal.controller.js";
import upload from "../middlewares/multer.middleware.js";
const mealRouter=Router()
mealRouter.route("/nutrition").post(upload.single("meal"),nutritionData)



export default mealRouter