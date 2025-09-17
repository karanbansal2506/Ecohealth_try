import{Schema ,model} from 'mongoose';
import  bcrypt from "bcryptjs"
import  jwt  from "jsonwebtoken";
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  weeklyCalories: {
    // Stores calories per day for current week (0=Sunday, 1=Monday, ..., 6=Saturday)
    type: [Number],
    default: [0, 0, 0, 0, 0, 0, 0] // 7 elements, one per weekday
  },
   weeklyCarbonFootprint: {
        // Stores total kg CO2e per day for the current week (0=Sunday, ..., 6=Saturday)
        type: [Number],
        default: [0, 0, 0, 0, 0, 0, 0] // 7 elements, one for each day
    },
  // Optionally, store day names for clarity
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});
userSchema.pre("save",async(next)=>{
if(!this.isModified("password")){
return next()
}
 this.password=await bcrypt.hash(this.password,10)
})
userSchema.methods={
    generateJWTToken:async function(){
        return  jwt.sign({
            id:this._id
        },process.env.JWT_SECRET|| "aiufhvhbauvauv")
    },
    comparePassword:async (password)=>{
       return await  bcrypt.compare(password,this.password)
    },

  

}
const userModel=model('User', userSchema)
export default userModel
