import mongoose,{Schema,model} from "mongoose"
import userModel from "./user.model"
const mealSchema=new Schema
(
{
  user: {type:Schema.Types.ObjectId,ref:User},

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

},  {
    timestamps:true
  })


const mealModel=model("Meal",mealSchema)
 export default mealModel