import mongoose, { Schema, model } from "mongoose"
import userModel from "./user.model.js"
const mealSchema = new Schema
  (
    {
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },

      items: [{
        //todo rating 
        foodName: String,
        quantityGrams: Number,
        nutrition: {
          protein: Number,
          carbs: Number,
          fat: Number,


        },
        calories: Number,

      }]

    }, {
    timestamps: true
  })


const mealModel = model("Meal", mealSchema)
export default mealModel