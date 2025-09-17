import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js";
import errorMiddelware from "./middlewares/error.middleware.js";
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
// app.use(cors({
// origin:[process.env.FRONTED_URl],
// credentials:true
// }))

app.use(cookieParser())

const emissionFactors = {
    driving: 0.21,    // kg CO2e per km
    electricity: 0.93, // kg CO2e per kWh (example factor, can vary by region)
    flying: 0.25,      // kg CO2e per km
    // Add more activities and their factors as needed
};

// API Endpoint to calculate carbon footprint
app.post('/api/calculate', (req, res) => {
    const { activity, value } = req.body;

    // Validate input
    if (!activity || !value || isNaN(value) || value <= 0) {
        return res.status(400).json({ message: 'Invalid input: activity and a positive numeric value are required.' });
    }

    const lowerCaseActivity = activity.toLowerCase();

    // Check if the activity is supported and has an emission factor
    if (!emissionFactors[lowerCaseActivity]) {
        return res.status(400).json({ message: `Unknown activity: ${activity}. Please select a supported activity.` });
    }

    // Calculate carbon footprint
    const carbonFootprint = value * emissionFactors[lowerCaseActivity];

    // Return the calculated footprint
    res.status(200).json({ carbonFootprint: carbonFootprint });
});





app.use("/ping",(req,res)=>{
    res.send("pong");
})
app.use("/api/v1/user",userRouter)

app.use((req,res)=>{
res.status(404).send("OOPS ! 404 page not Found");
})
app.use(errorMiddelware);

export default app;