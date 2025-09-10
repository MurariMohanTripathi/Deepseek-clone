import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from "cors";

//importing the routes
import userRoutes from "./routes/user.route.js";
import promptRoutes from "./routes/prompt.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT ||4001;
const MONGO_URL = process.env.MONGODB_URI;


//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:process.env.FRONTEND_URL,
        credentials:true,
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:["Content-Type","Authorization"]
    })
);

//DB Connection code goes Here !!!
mongoose.connect(MONGO_URL)
.then(()=>console.log("connected to db"))
.catch((error)=>console.error("db connection error :",error));


//routes
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/deepseekai",promptRoutes);

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})