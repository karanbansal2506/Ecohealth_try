import { Router } from "express";

import { nutritionData, save_meal, give_all_meals } from "../controllers/meal.controller.js";
import upload from "../middlewares/multer.middleware.js";
const mealRouter=Router()


mealRouter.route("/nutrition").post(upload.single("meal"),nutritionData)

mealRouter.route("/save-meal").post(save_meal)
mealRouter.route("/meals").get(give_all_meals)



export default mealRouter