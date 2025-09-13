import mongoose,{Schema,model} from "mongoose"
import userModel from "./user.model"
const mealSchema=new Schema
(
{
  user: {type:Schema.Types.ObjectId,ref:User},

  items: [{
    foodName: String,
    quantityGrams: Number,
    nutrition: Object,

  }],
  totals: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
   
  }

},  {
    timestamps:true
  })


const mealModel=model("Meal",mealSchema)
 export default mealModel