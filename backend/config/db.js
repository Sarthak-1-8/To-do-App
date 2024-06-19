import mongoose from "mongoose";
import { toDoModel } from "../models/to-do-model";

import dontenv from 'dotenv'
dontenv.config();

export const connectDB= async ()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected..")
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }

};