import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js";
import errorMiddelware from "./middlewares/error.middleware.js";
import carbonRouter from "./routes/corbonFootprint.routes.js";
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
// app.use(cors({
// origin:[process.env.FRONTED_URl],
// credentials:true
// }))

app.use(cookieParser())



// API Endpoint to calculate carbon footprint







app.use("/ping",(req,res)=>{
    res.send("pong");
})
app.use("/api/v1/user",userRouter)
app.use("/api/v1/carbon",carbonRouter)




app.use((req,res)=>{
res.status(404).send("OOPS ! 404 page not Found");
})
app.use(errorMiddelware);

export default app;