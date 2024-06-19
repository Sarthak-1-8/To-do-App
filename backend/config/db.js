import mongoose from "mongoose";

import dontenv from 'dotenv'
dontenv.config();

const connectDB= async ()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected..")
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }

};

export default connectDB;