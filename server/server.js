import express from 'express'
import toDoRoutes from '../backend/routes/to-do-Routes.js'
import connectDB from '../backend/config/db.js';

import dotenv from 'dotenv'
dotenv.config();


const app =express();
const port= process.env.PORT || 8080;

app.use(express.json());

app.use("//api/todos",toDoRoutes);






//Servert Start

const startServer= async ()=>{
    try{
        await connectDB();
        app.listen(port,()=>{
            console.log("Server Started")
        });
    }
    catch(err){
        console.log("Failed to start Server")
    }
}

startServer();

