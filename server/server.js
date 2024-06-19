import express from 'express'
import toDoRoutes from '../backend/routes/to-do-Routes.js'

const app =express();
const port=8080;

app.use(express.json());

app.use("//api/todos",toDoRoutes);














app.listen(port,()=>{
    console.log("Server Started")

});