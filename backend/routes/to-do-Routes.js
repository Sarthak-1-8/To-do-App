import express from 'express';
import { safeCreateTask,safeUpdateTask } from '../middleware/validator';
import { toDos } from '../models/to-do-model';

 const router= express.Router();
 
 //Middleware
 

 
//Routes

router.get("/All-task",(req, res)=>{
    console.log("route....")
    res.status(200).json({
        msg:'Fine'
    });
});

router.post("/create-task",safeCreateTask,(req,res)=>{
    const {tittle , description} = req.body;
    console.log("TaskCreated")

});

router.put("/update-task",safeUpdateTask,(req,res)=>{

});

router.put("/completed",safeUpdateTask,(req,res)=>{

});





export default router;